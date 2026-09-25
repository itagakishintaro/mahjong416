/**
 * 悪手（dispreferred）を作るためのプロンプト。
 *
 * ソルバーの計算結果を渡さないモデルに答えさせ、その答えを悪手として使う。
 * 機械的なテンプレートで書いた理由文は、正解側の自然文と文体で見分けが
 * ついてしまい、DPOが「打牌の選好」ではなく「定型文らしさ」を学ぶ恐れが
 * あるため（nanikiru-ai-design-doc.md §6.3）。
 *
 * 受け入れ枚数を書かせないのは、計算結果を持たないモデルが誤った枚数を
 * 書くから。それを悪手側にだけ入れると、両者の差が「判断の質」ではなく
 * 「数字が合っているか」になってしまう。正解側の理由文は30件中1件しか
 * 枚数に言及していないので、禁止しても不自然にならない。
 *
 * 一方でシャンテン数・テンパイへの言及は禁止しない。正解側の理由文も
 * 30件中12件が使っており、こちらを禁止すると逆向きの手がかりになる。
 *
 * 文体を常体に揃えるのも同じ理由。正解側は30件すべてが常体で、放っておくと
 * モデルは「です・ます調を避ける」ことを学んでしまう。
 */

import {type Situation} from '../situation.js';
import {buildUserPrompt} from './build.js';

/** 理由文の上限。正解側の理由文は中央値100文字前後に収まっている */
export const REASON_MAX_LENGTH = 150;

export function buildAmateurSystemInstruction(): string {
  return [
    'あなたは麻雀の何切る問題に答える打ち手です。',
    '',
    '# 前提ルール',
    '- 半荘戦、Mリーグルール（赤あり、一発裏あり、食いタンあり、後付けあり）',
    '- 捨て牌・点棒状況・他家の情報は与えられない。手牌と局面だけで判断する',
    '',
    '# 出力フォーマット',
    '以下の形式で、この順序どおりに出力すること。',
    '',
    '【推奨打牌】<牌>',
    '【理由】',
    '<推奨打牌を選ぶ根拠>',
    '',
    '# 書き方の制約',
    '- 推奨打牌は必ず手牌またはツモ牌にある牌から選ぶこと',
    `- 理由は${REASON_MAX_LENGTH}文字以内。結論だけを簡潔に述べること`,
    '- 打牌候補を列挙して比較しないこと。選んだ1枚について書くこと',
    '- 受け入れ枚数を書かないこと（「○枚」という表現を使わない）',
    '- 文体は常体（だ・である調）にすること。「です」「ます」は使わない',
    '- 牌の形（両面・カンチャン・対子など）や手役、打点、巡目を根拠にすること',
  ].join('\n');
}

export type AmateurPromptOptions = {
  /** この牌は選ばせない（正解と同じ答えになったときの再生成に使う） */
  readonly exclude?: readonly string[];
};

export function buildAmateurUserPrompt(
  situation: Situation,
  options: AmateurPromptOptions = {},
): string {
  const base = buildUserPrompt(situation, [], {withSolver: false});
  const exclude = options.exclude ?? [];
  if (exclude.length === 0) {
    return base;
  }
  return [
    base,
    '',
    `次の牌は選ばないこと: ${exclude.join(' ')}`,
  ].join('\n');
}
