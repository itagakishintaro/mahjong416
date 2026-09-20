/**
 * 問題マスタの確認用レポート。
 *
 * データ入力スキルが、牌の枚数や受入枚数を自分で数えずに済むようにする。
 * LLMの計算ミスが学習データに混入すると、データそのものが汚染されるため
 * （nanikiru-ai-design-doc.md §6.3）。
 */

import {autoRejected} from './auto-rejected.js';
import {buildUserPrompt} from '../prompt/build.js';
import {evaluateCandidates, type Candidate} from '../solver/candidates.js';
import {formatTile} from '../solver/tile.js';
import {type Problem} from './problem.js';

export type CandidateReport = {
  readonly discard: string;
  readonly shanten: number;
  readonly ukeireTotal: number;
  readonly ukeire: string;
};

export type ProblemReport = {
  readonly id: string;
  /** 局面とソルバー結果の要約（プロンプトと同じ形式） */
  readonly situation: string;
  readonly answer: CandidateReport;
  readonly best: CandidateReport;
  /**
   * 正解がソルバー上の最良手と同等か。
   * 受入が同数の打牌が複数ある場合、並び順で先頭かどうかは意味を持たない
   * ため、シャンテン数と受入枚数の一致で判定する。
   */
  readonly answerIsBest: boolean;
  readonly candidates: readonly CandidateReport[];
  /** 学習データで悪手として使われる打牌と理由 */
  readonly rejected: {readonly discard: string; readonly reason: string} | undefined;
};

/** 問題を検証し、ソルバーの計算結果を添えて返す */
export function buildProblemReport(problem: Problem): ProblemReport {
  const candidates = evaluateCandidates(problem.situation.hand);
  const answerNotation = formatTile(problem.answer.discard);
  const answer = candidates.find(
    (candidate) => formatTile(candidate.discard) === answerNotation,
  );
  const best = candidates[0];
  if (answer === undefined || best === undefined) {
    // parseProblem が打牌の存在を確認済みなので、ここには来ない
    throw new Error(`問題 ${problem.id} の打牌候補を評価できません`);
  }

  return {
    id: problem.id,
    situation: buildUserPrompt(problem.situation, candidates),
    answer: toReport(answer),
    best: toReport(best),
    answerIsBest:
      answer.shanten === best.shanten &&
      answer.ukeireTotal === best.ukeireTotal,
    candidates: candidates.map(toReport),
    rejected: resolveRejected(problem, candidates),
  };
}

/** 問題に悪手が書かれていればそれを、無ければソルバーの答えを返す */
function resolveRejected(
  problem: Problem,
  candidates: readonly Candidate[],
): {discard: string; reason: string} | undefined {
  const written = problem.rejected[0];
  if (written !== undefined) {
    return {discard: formatTile(written.discard), reason: written.reason};
  }
  const generated = autoRejected(problem.answer.discard, candidates);
  return generated === undefined
    ? undefined
    : {discard: formatTile(generated.discard), reason: generated.reason};
}

function toReport(candidate: Candidate): CandidateReport {
  return {
    discard: formatTile(candidate.discard),
    shanten: candidate.shanten,
    ukeireTotal: candidate.ukeireTotal,
    ukeire: candidate.ukeire
      .map(({tile, count}) => `${formatTile(tile)}:${count}`)
      .join(' '),
  };
}
