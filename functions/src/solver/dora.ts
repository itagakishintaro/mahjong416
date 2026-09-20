/**
 * ドラの枚数計算。
 *
 * 打点判断の根拠になるため、モデルに数えさせずソルバーが算出する。
 * 役の判定は行わない（nanikiru-ai-design-doc.md §5.1）。
 */

import {tileKey, type Tile} from './tile.js';

/**
 * その牌が何枚分のドラにあたるか。
 *
 * 赤ドラは常に1枚分。赤5sでドラ表示が5sの場合のように、赤ドラが同時に
 * ドラでもあるときは2枚分になる。
 */
export function doraValue(tile: Tile, dora: readonly Tile[]): number {
  const key = tileKey(tile);
  const matches = dora.some((doraTile) => tileKey(doraTile) === key) ? 1 : 0;
  return matches + (tile.red ? 1 : 0);
}

/** 牌の集まりに含まれるドラの合計枚数 */
export function countDora(
  tiles: readonly Tile[],
  dora: readonly Tile[],
): number {
  return tiles.reduce((sum, tile) => sum + doraValue(tile, dora), 0);
}
