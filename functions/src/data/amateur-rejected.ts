/**
 * 悪手（dispreferred）の生成。
 *
 * ソルバーの計算結果を持たないモデルに答えさせ、その答えを悪手として使う。
 * テンプレートで書いた理由文は正解側の自然文と文体で区別できてしまい、
 * DPOが打牌の選好ではなく文体を学ぶ恐れがあるため
 * （nanikiru-ai-design-doc.md §6.3）。
 */

import {type ModelClient} from '../api/nanikiru.js';
import {
  buildAmateurSystemInstruction,
  buildAmateurUserPrompt,
  REASON_MAX_LENGTH,
} from '../prompt/amateur.js';
import {parseModelResponse} from '../prompt/parse.js';
import {formatTile} from '../solver/tile.js';
import {type Situation} from '../situation.js';

/** 理由文の下限。これを下回るものは根拠になっていない */
const REASON_MIN_LENGTH = 20;
/** 聞き直しを含む試行回数 */
const DEFAULT_ATTEMPTS = 3;

export type AmateurAnswer = {
  readonly discard: string;
  readonly reason: string;
  readonly answerDiscard: string;
};

/**
 * 悪手として使えるかを検査する。
 *
 * 使えない理由を並べて返す。空配列なら採用してよい。
 */
export function validateAmateurAnswer(answer: AmateurAnswer): string[] {
  const problems: string[] = [];
  if (answer.discard === answer.answerDiscard) {
    problems.push('正解と同じ打牌');
  }
  const reason = answer.reason.trim();
  if (reason.length > REASON_MAX_LENGTH) {
    problems.push(`理由文が長い（${reason.length}文字）`);
  } else if (reason.length < REASON_MIN_LENGTH) {
    problems.push(`理由文が短い（${reason.length}文字）`);
  }
  if (/\d+\s*枚/.test(reason)) {
    // 計算結果を持たないモデルの枚数は誤っている。悪手側にだけ誤った枚数が
    // 入ると、両者の差が「判断」ではなく「数字の正しさ」になってしまう。
    // シャンテン数への言及は正解側にも多いため禁止しない
    problems.push('理由文に受け入れ枚数が含まれる');
  }
  if (/(です|ます|ません|でした)[。、]/.test(reason)) {
    // 正解側の理由文は30件すべてが常体。文体が違うと、それ自体が
    // preferred と dispreferred を見分ける手がかりになってしまう
    problems.push('理由文が常体でない');
  }
  return problems;
}

export type GenerateOptions = {
  readonly attempts?: number;
  /** 採用しなかった応答を知らせる（進捗表示に使う） */
  readonly onReject?: (attempt: number, problems: readonly string[]) => void;
};

/**
 * ソルバー無しのモデルに答えさせ、悪手として使える答えを得る。
 *
 * 条件を満たさなければ聞き直す。試行を使い切ったら undefined を返す。
 * 無理に採用すると学習データが汚れるため、諦めるほうを選ぶ。
 */
export async function generateAmateurRejected(
  situation: Situation,
  answerDiscard: string,
  client: ModelClient,
  options: GenerateOptions = {},
): Promise<{discard: string; reason: string} | undefined> {
  const attempts = options.attempts ?? DEFAULT_ATTEMPTS;
  const system = buildAmateurSystemInstruction();
  const exclude = new Set<string>();

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const prompt = buildAmateurUserPrompt(situation, {
      exclude: [...exclude],
    });
    let discard: string;
    let reason: string;
    try {
      const parsed = parseModelResponse(await client.generate(system, prompt));
      discard = formatTile(parsed.discard);
      reason = parsed.reason.trim();
    } catch (error) {
      options.onReject?.(attempt, [
        error instanceof Error ? error.message : String(error),
      ]);
      continue;
    }

    const problems = validateAmateurAnswer({discard, reason, answerDiscard});
    if (problems.length === 0) {
      return {discard, reason};
    }
    options.onReject?.(attempt, problems);
    if (discard === answerDiscard) {
      // 同じ牌を答え続けても進まないので、次回は選ばせない
      exclude.add(discard);
    }
  }
  return undefined;
}
