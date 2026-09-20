/**
 * プリファレンス チューニング用データセットの生成。
 *
 * 形式は Vertex AI の仕様に従う（nanikiru-ai-design-doc.md §6.4）。
 *   score: 1 = 望ましい（preferred） / 0 = 望ましくない（dispreferred）
 *   contents はユーザーのターンで終わること
 */

import {autoRejected} from './auto-rejected.js';
import {buildSystemInstruction, buildUserPrompt, formatAnswer} from '../prompt/build.js';
import {evaluateCandidates, type Candidate} from '../solver/candidates.js';
import {formatTile, type Tile} from '../solver/tile.js';
import {type Discard, type Problem} from './problem.js';

/** 望ましい回答のスコア */
const SCORE_PREFERRED = 1;
/** 望ましくない回答のスコア */
const SCORE_DISPREFERRED = 0;

type TextPart = {readonly text: string};

export type PreferenceExample = {
  readonly system_instruction: {readonly parts: readonly TextPart[]};
  readonly contents: readonly {
    readonly role: 'user';
    readonly parts: readonly TextPart[];
  }[];
  readonly completions: readonly {
    readonly score: number;
    readonly completion: {
      readonly role: 'model';
      readonly parts: readonly TextPart[];
    };
  }[];
};

/**
 * 1問から、悪手の数だけ学習ペアを作る。
 *
 * preferred と dispreferred は同じプロンプトに対する別の回答であり、
 * 形式も揃える。形式が崩れていると、モデルが内容の良し悪しではなく
 * 形式の崩れを学習してしまうため（design doc §6.5.3）。
 */
export function buildPreferenceExamples(
  problem: Problem,
): PreferenceExample[] {
  const candidates = evaluateCandidates(problem.situation.hand);
  const rejected = resolveRejected(problem, candidates);
  if (rejected.length === 0) {
    throw new Error(`問題 ${problem.id} の悪手を作れません（打牌候補が正解のみ）`);
  }
  const userPrompt = buildUserPrompt(problem.situation, candidates);
  const preferred = renderAnswer(problem, candidates, problem.answer);

  return rejected.map((entry) => ({
    system_instruction: {parts: [{text: buildSystemInstruction()}]},
    contents: [{role: 'user' as const, parts: [{text: userPrompt}]}],
    completions: [
      {
        score: SCORE_PREFERRED,
        completion: {role: 'model' as const, parts: [{text: preferred}]},
      },
      {
        score: SCORE_DISPREFERRED,
        completion: {
          role: 'model' as const,
          parts: [{text: renderAnswer(problem, candidates, entry)}],
        },
      },
    ],
  }));
}

/**
 * 悪手を決める。問題に書かれていればそれを使い、無ければソルバーの
 * 答えから自動生成する（design doc §6.5）。
 */
function resolveRejected(
  problem: Problem,
  candidates: readonly Candidate[],
): readonly Discard[] {
  if (problem.rejected.length > 0) {
    return problem.rejected;
  }
  const generated = autoRejected(problem.answer.discard, candidates);
  return generated === undefined ? [] : [generated];
}

/**
 * 打牌と理由から回答テキストを作る。
 * シャンテン数・受入はその打牌に対するソルバーの正しい計算値を使う。
 */
function renderAnswer(
  problem: Problem,
  candidates: readonly Candidate[],
  discard: Discard,
): string {
  const candidate = findCandidate(candidates, discard.discard, problem.id);
  return formatAnswer({
    discard: candidate.discard,
    shanten: candidate.shanten,
    ukeire: candidate.ukeire,
    ukeireTotal: candidate.ukeireTotal,
    reason: discard.reason,
  });
}

function findCandidate(
  candidates: readonly Candidate[],
  tile: Tile,
  problemId: string,
): Candidate {
  const notation = formatTile(tile);
  const found = candidates.find(
    (candidate) => formatTile(candidate.discard) === notation,
  );
  if (found === undefined) {
    throw new Error(
      `問題 ${problemId} の打牌「${notation}」が候補にありません`,
    );
  }
  return found;
}

/** JSONL（1行1件）にする */
export function toJsonl(examples: readonly PreferenceExample[]): string {
  if (examples.length === 0) {
    return '';
  }
  return `${examples.map((example) => JSON.stringify(example)).join('\n')}\n`;
}
