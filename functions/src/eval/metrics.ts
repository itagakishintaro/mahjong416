/**
 * 評価指標の計算（nanikiru-ai-design-doc.md §7.2）。
 *
 * 同じ手順で毎回比較できることを最優先にするため、指標の定義はここに
 * 集約する。モデルの呼び出しには依存しない。
 */

import {type Candidate} from '../solver/candidates.js';
import {formatTile} from '../solver/tile.js';

/** 準最善とみなす受入枚数の下限（最良手比） */
const NEAR_BEST_UKEIRE_RATIO = 0.85;

/** 1問分の評価結果 */
export type Evaluation = {
  readonly problemId: string;
  /** 正解の打牌 */
  readonly expected: string;
  /** モデルが推奨した打牌 */
  readonly actual: string;
  /** その問題の悪手 */
  readonly rejected: readonly string[];
  /** ソルバー上の準最善手 */
  readonly nearBest: readonly string[];
  /** 出力の数値がソルバーの計算値と一致していたか */
  readonly numbersConsistent: boolean;
};

export type Miss = {
  readonly problemId: string;
  readonly expected: string;
  readonly actual: string;
  /** 悪手を選んでいたか */
  readonly isRejected: boolean;
  /** 牌効率上は妥当な範囲だったか */
  readonly isNearBest: boolean;
};

export type Metrics = {
  readonly total: number;
  /** 正解打牌と完全一致した割合（成功基準の主指標） */
  readonly strictAccuracy: number;
  /** 最良手と同シャンテン・受入85%以上に収まった割合 */
  readonly nearBestRate: number;
  /** 明確な悪手を選んだ割合 */
  readonly badDiscardRate: number;
  /** 数値がソルバーと一致した割合 */
  readonly numberConsistencyRate: number;
  /** 厳格正解でなかった問題 */
  readonly misses: readonly Miss[];
};

/**
 * ソルバーの計算結果から準最善手の集合を求める。
 * 正解を外した場合でも牌効率上は妥当だったかを測るために使う。
 */
export function nearBestDiscards(
  candidates: readonly Candidate[],
): string[] {
  const best = candidates[0];
  if (best === undefined) {
    return [];
  }
  const threshold = best.ukeireTotal * NEAR_BEST_UKEIRE_RATIO;
  return candidates
    .filter(
      (candidate) =>
        candidate.shanten === best.shanten &&
        candidate.ukeireTotal >= threshold,
    )
    .map((candidate) => formatTile(candidate.discard));
}

/** 評価結果をまとめて指標にする */
export function summarize(evaluations: readonly Evaluation[]): Metrics {
  const total = evaluations.length;
  if (total === 0) {
    return {
      total: 0,
      strictAccuracy: 0,
      nearBestRate: 0,
      badDiscardRate: 0,
      numberConsistencyRate: 0,
      misses: [],
    };
  }

  let correct = 0;
  let nearBest = 0;
  let bad = 0;
  let consistent = 0;
  const misses: Miss[] = [];

  for (const evaluation of evaluations) {
    const isCorrect = evaluation.actual === evaluation.expected;
    const isNearBest = evaluation.nearBest.includes(evaluation.actual);
    const isRejected = evaluation.rejected.includes(evaluation.actual);

    if (isCorrect) {
      correct += 1;
    } else {
      misses.push({
        problemId: evaluation.problemId,
        expected: evaluation.expected,
        actual: evaluation.actual,
        isRejected,
        isNearBest,
      });
    }
    if (isNearBest) {
      nearBest += 1;
    }
    if (isRejected) {
      bad += 1;
    }
    if (evaluation.numbersConsistent) {
      consistent += 1;
    }
  }

  return {
    total,
    strictAccuracy: correct / total,
    nearBestRate: nearBest / total,
    badDiscardRate: bad / total,
    numberConsistencyRate: consistent / total,
    misses,
  };
}
