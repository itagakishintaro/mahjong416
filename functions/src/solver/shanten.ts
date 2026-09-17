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
