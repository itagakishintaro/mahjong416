/**
 * 受け入れ枚数の計算。
 *
 * 打牌後の手牌に1枚加えてシャンテン数が減る牌を有効牌とし、
 * その残り枚数を数える。捨て牌は入力対象外のため考慮しない
 * （nanikiru-ai-design-doc.md §5.3）。
 */

import {type Meld} from './hand.js';
import {shanten} from './shanten.js';
import {allTileKinds, tileKey, type Tile} from './tile.js';

/** 同じ牌は4枚まで */
const TILES_PER_KIND = 4;

export type UkeireTile = {
  readonly tile: Tile;
  /** 自分から見えていない残り枚数 */
  readonly count: number;
};

export type UkeireResult = {
  readonly tiles: readonly UkeireTile[];
  readonly total: number;
};

/**
 * 受け入れを求める。
 *
 * @param concealed 打牌後の手牌（副露を含まない）
 * @param melds 自分の副露
 */
export function ukeire(
  concealed: readonly Tile[],
  melds: readonly Meld[],
): UkeireResult {
  const meldCount = melds.length;
  const current = shanten(concealed, meldCount);
  if (current < 0) {
    // すでに和了しているため、これ以上進まない
    return {tiles: [], total: 0};
  }

  const visible = countVisible(concealed, melds);
  const tiles: UkeireTile[] = [];
  for (const tile of allTileKinds()) {
    const count = TILES_PER_KIND - (visible.get(tileKey(tile)) ?? 0);
    if (count <= 0) {
      // 自分で使い切っている牌は引けない
      continue;
    }
    if (shanten([...concealed, tile], meldCount) < current) {
      tiles.push({tile, count});
    }
  }

  const total = tiles.reduce((sum, {count}) => sum + count, 0);
  return {tiles, total};
}

/** 自分から見えている牌の枚数。赤ドラは通常牌と合算する */
function countVisible(
  concealed: readonly Tile[],
  melds: readonly Meld[],
): Map<string, number> {
  const counts = new Map<string, number>();
  const all = [...concealed, ...melds.flatMap((meld) => [...meld.tiles])];
  for (const tile of all) {
    const key = tileKey(tile);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}
