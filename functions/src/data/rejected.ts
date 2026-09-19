/**
 * 悪手（DPOのdispreferred側）の機械抽出。
 *
 * 既存の何切る問題には「明確な悪手」が含まれないため、ソルバーの計算結果
 * から機械的に抽出する（nanikiru-ai-design-doc.md §6.5.1）。
 * 打牌の選定に人間の判断を要さないことが、この方式の利点。
 */

import {type Candidate} from '../solver/candidates.js';
import {formatTile, tileKey, type Tile} from '../solver/tile.js';

export type RejectedKind =
  /** A. 正解よりシャンテン数が大きくなる */
  | 'shanten-back'
  /** B. シャンテン数は同じだが受入が大きく減る */
  | 'ukeire-loss'
  /** C. 赤ドラ・ドラを切り、受入も増えない */
  | 'value-loss'
  /** D. 正解が字牌残しのときに、その字牌を切る */
  | 'honor-misuse';

export type RejectedCandidate = {
  readonly candidate: Candidate;
  readonly kind: RejectedKind;
};

export type ExtractRejectedParams = {
  readonly candidates: readonly Candidate[];
  /** 正解の打牌 */
  readonly answer: Tile;
  readonly dora: readonly Tile[];
  /** 抽出する最大件数 */
  readonly max?: number;
};

/** 受入がこの割合を下回れば「大幅減」とみなす */
const UKEIRE_LOSS_RATIO = 0.6;
/**
 * 受入がこの割合以上あれば、正解と同等（acceptable）の可能性があるため
 * 字牌切りは悪手として採用しない。誤った悪手を学習させるのは有害なため。
 *
 * 打点放棄（value-loss）にはこの除外を適用しない。受入が同等でも
 * 赤ドラ・ドラを手放すこと自体が明確な損失であるため。
 */
const NEAR_EQUAL_RATIO = 0.9;
const DEFAULT_MAX = 3;

/** 抽出の優先順位。上にあるものほど明確な誤り */
const KIND_PRIORITY: readonly RejectedKind[] = [
  'shanten-back',
  'ukeire-loss',
  'value-loss',
  'honor-misuse',
];

/** 打牌候補から悪手を抽出する */
export function extractRejected(
  params: ExtractRejectedParams,
): RejectedCandidate[] {
  const {candidates, answer, dora, max = DEFAULT_MAX} = params;
  const answerNotation = formatTile(answer);
  const correct = candidates.find(
    (candidate) => formatTile(candidate.discard) === answerNotation,
  );
  if (correct === undefined) {
    throw new Error(`正解の打牌「${answerNotation}」が候補にありません`);
  }

  const doraKeys = new Set(dora.map(tileKey));
  const rejected: RejectedCandidate[] = [];

  for (const candidate of candidates) {
    if (candidate === correct) {
      continue;
    }
    const kind = classify(candidate, correct, answer, doraKeys);
    if (kind !== undefined) {
      rejected.push({candidate, kind});
    }
  }

  return rejected.sort(compare).slice(0, max);
}

/** 正解とほぼ同等の打牌か（acceptable の可能性があるもの） */
function isNearEqual(candidate: Candidate, correct: Candidate): boolean {
  return (
    candidate.shanten === correct.shanten &&
    candidate.ukeireTotal >= correct.ukeireTotal * NEAR_EQUAL_RATIO
  );
}

function classify(
  candidate: Candidate,
  correct: Candidate,
  answer: Tile,
  doraKeys: ReadonlySet<string>,
): RejectedKind | undefined {
  if (candidate.shanten > correct.shanten) {
    return 'shanten-back';
  }
  if (
    candidate.shanten === correct.shanten &&
    candidate.ukeireTotal < correct.ukeireTotal * UKEIRE_LOSS_RATIO
  ) {
    return 'ukeire-loss';
  }
  if (
    isValuable(candidate.discard, doraKeys) &&
    candidate.ukeireTotal <= correct.ukeireTotal
  ) {
    return 'value-loss';
  }
  if (
    answer.suit !== 'z' &&
    candidate.discard.suit === 'z' &&
    !isNearEqual(candidate, correct)
  ) {
    // 受入が正解とほぼ同等なら、字牌切りも許容手の可能性があるため採らない
    return 'honor-misuse';
  }
  return undefined;
}

/** 赤ドラ、またはドラそのものか */
function isValuable(tile: Tile, doraKeys: ReadonlySet<string>): boolean {
  return tile.red || doraKeys.has(tileKey(tile));
}

/**
 * 種別の優先順に並べ、同じ種別では「より悪い」ものを先にする。
 * シャンテン数が大きいほど、受入が少ないほど悪い。
 */
function compare(a: RejectedCandidate, b: RejectedCandidate): number {
  const byKind =
    KIND_PRIORITY.indexOf(a.kind) - KIND_PRIORITY.indexOf(b.kind);
  if (byKind !== 0) {
    return byKind;
  }
  const byShanten = b.candidate.shanten - a.candidate.shanten;
  if (byShanten !== 0) {
    return byShanten;
  }
  return a.candidate.ukeireTotal - b.candidate.ukeireTotal;
}
