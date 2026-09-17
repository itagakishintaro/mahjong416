/**
 * シャンテン数の計算。
 *
 * 面子手（4面子1雀頭）を対象とする。七対子・国士無双は別途。
 * 和了形を -1、テンパイを 0 とする。
 */

import {type Tile} from './tile.js';

/** 牌の種類数（数牌9×3 + 字牌7） */
const TILE_KINDS = 34;
/** 面子手で必要なブロック数（4面子 + 雀頭） */
const MAX_BLOCKS = 5;
/** 何も揃っていない面子手のシャンテン数 */
export const MAX_REGULAR_SHANTEN = 8;

const SUIT_OFFSET = {m: 0, p: 9, s: 18, z: 27} as const;

/** 牌を種類ごとの枚数配列にする。赤ドラは通常牌と同一視する */
export function toCounts(tiles: readonly Tile[]): number[] {
  const counts = new Array<number>(TILE_KINDS).fill(0);
  for (const tile of tiles) {
    const index = SUIT_OFFSET[tile.suit] + tile.rank - 1;
    counts[index] = (counts[index] ?? 0) + 1;
  }
  return counts;
}

/** 数牌かどうか（字牌は順子を作れない） */
function isNumberSuit(index: number): boolean {
  return index < SUIT_OFFSET.z;
}

/** その牌から順子・搭子を作れるか（同じ色の中に収まるか） */
function canReach(index: number, distance: number): boolean {
  if (!isNumberSuit(index)) {
    return false;
  }
  return (index % 9) + distance <= 8;
}

/**
 * 面子手のシャンテン数を返す。
 *
 * @param tiles 手牌（副露を含まない。ツモ牌を含めてよい）
 * @param meldCount 副露の数。確定した面子として数える
 */
export function regularShanten(
  tiles: readonly Tile[],
  meldCount = 0,
): number {
  const counts = toCounts(tiles);
  return search(counts, 0, meldCount, 0, 0);
}

/**
 * 面子・搭子・対子の取り出し方を全探索し、最小のシャンテン数を返す。
 *
 * counts は探索中に書き換えるが、呼び出し元から見た状態は必ず復元する。
 */
function search(
  counts: number[],
  index: number,
  melds: number,
  partials: number,
  pairs: number,
): number {
  if (index >= TILE_KINDS) {
    return evaluate(melds, partials, pairs);
  }
  const count = counts[index] ?? 0;
  if (count === 0) {
    return search(counts, index + 1, melds, partials, pairs);
  }

  let best = MAX_REGULAR_SHANTEN;
  const canAddBlock = melds + partials < MAX_BLOCKS;

  // 暗刻
  if (count >= 3) {
    counts[index] = count - 3;
    best = Math.min(best, search(counts, index, melds + 1, partials, pairs));
    counts[index] = count;
  }

  // 順子
  if (canReach(index, 2) && (counts[index + 1] ?? 0) > 0 && (counts[index + 2] ?? 0) > 0) {
    consume(counts, [index, index + 1, index + 2], -1);
    best = Math.min(best, search(counts, index, melds + 1, partials, pairs));
    consume(counts, [index, index + 1, index + 2], 1);
  }

  if (canAddBlock) {
    // 対子
    if (count >= 2) {
      counts[index] = count - 2;
      best = Math.min(
        best,
        search(counts, index, melds, partials + 1, pairs + 1),
      );
      counts[index] = count;
    }

    // 両面・辺張
    if (canReach(index, 1) && (counts[index + 1] ?? 0) > 0) {
      consume(counts, [index, index + 1], -1);
      best = Math.min(best, search(counts, index, melds, partials + 1, pairs));
      consume(counts, [index, index + 1], 1);
    }

    // 嵌張
    if (canReach(index, 2) && (counts[index + 2] ?? 0) > 0) {
      consume(counts, [index, index + 2], -1);
      best = Math.min(best, search(counts, index, melds, partials + 1, pairs));
      consume(counts, [index, index + 2], 1);
    }
  }

  // どのブロックにも使わない（浮き牌）
  counts[index] = count - 1;
  best = Math.min(best, search(counts, index, melds, partials, pairs));
  counts[index] = count;

  return best;
}

function consume(counts: number[], indices: readonly number[], delta: number): void {
  for (const index of indices) {
    counts[index] = (counts[index] ?? 0) + delta;
  }
}

/**
 * ブロックの内訳からシャンテン数を求める。
 *
 * 5ブロック揃っていても雀頭が無ければ、どれかを崩す必要があるため1加算する。
 */
function evaluate(melds: number, partials: number, pairs: number): number {
  let shanten = MAX_REGULAR_SHANTEN - 2 * melds - partials;
  if (melds + partials === MAX_BLOCKS && pairs === 0) {
    shanten += 1;
  }
  return shanten;
}

/** 七対子に必要な対子の数 */
const PAIRS_FOR_SEVEN_PAIRS = 7;
/** 国士無双に必要な么九牌の種類数 */
const KINDS_FOR_THIRTEEN_ORPHANS = 13;

/** 么九牌（老頭牌 + 字牌）のインデックス */
const TERMINAL_INDEXES: readonly number[] = [
  SUIT_OFFSET.m + 0,
  SUIT_OFFSET.m + 8,
  SUIT_OFFSET.p + 0,
  SUIT_OFFSET.p + 8,
  SUIT_OFFSET.s + 0,
  SUIT_OFFSET.s + 8,
  ...Array.from({length: 7}, (_, i) => SUIT_OFFSET.z + i),
];

/**
 * 七対子のシャンテン数。副露があると成立しないため Infinity を返す。
 *
 * 同じ牌が4枚あっても対子は1つとしか数えられないため、
 * 対子の数だけでなく牌の種類数も見る必要がある。
 */
export function sevenPairsShanten(
  tiles: readonly Tile[],
  meldCount = 0,
): number {
  if (meldCount > 0) {
    return Number.POSITIVE_INFINITY;
  }
  const counts = toCounts(tiles);
  let pairs = 0;
  let kinds = 0;
  for (const count of counts) {
    if (count > 0) {
      kinds += 1;
    }
    if (count >= 2) {
      pairs += 1;
    }
  }

  let shantenValue = PAIRS_FOR_SEVEN_PAIRS - 1 - pairs;
  if (kinds < PAIRS_FOR_SEVEN_PAIRS) {
    // 種類が足りない分は、余った牌を切って別の種類を引き直す必要がある
    shantenValue += PAIRS_FOR_SEVEN_PAIRS - kinds;
  }
  return shantenValue;
}

/**
 * 国士無双のシャンテン数。副露があると成立しないため Infinity を返す。
 */
export function thirteenOrphansShanten(
  tiles: readonly Tile[],
  meldCount = 0,
): number {
  if (meldCount > 0) {
    return Number.POSITIVE_INFINITY;
  }
  const counts = toCounts(tiles);
  let kinds = 0;
  let hasPair = false;
  for (const index of TERMINAL_INDEXES) {
    const count = counts[index] ?? 0;
    if (count > 0) {
      kinds += 1;
    }
    if (count >= 2) {
      hasPair = true;
    }
  }
  return KINDS_FOR_THIRTEEN_ORPHANS - kinds - (hasPair ? 1 : 0);
}

/**
 * 面子手・七対子・国士無双のうち最も進んでいる形のシャンテン数を返す。
 */
export function shanten(tiles: readonly Tile[], meldCount = 0): number {
  return Math.min(
    regularShanten(tiles, meldCount),
    sevenPairsShanten(tiles, meldCount),
    thirteenOrphansShanten(tiles, meldCount),
  );
}
