/**
 * テスト専用のヘルパー。プロダクションコードから使わない。
 */

import {parseTiles, type Tile} from './tile.js';

/**
 * '123m456p東東' のような麻雀の略記をパースする。
 * 赤ドラは '赤5m' のように単独で書く。
 */
export function tiles(notation: string): Tile[] {
  const tokens = notation.match(/赤[1-9][mps]|[1-9]+[mps]|[東南西北白発中]/g) ?? [];
  const expanded = tokens.flatMap((token) => {
    if (token.startsWith('赤') || /^[東南西北白発中]$/.test(token)) {
      return [token];
    }
    const suit = token.slice(-1);
    return [...token.slice(0, -1)].map((rank) => `${rank}${suit}`);
  });
  return parseTiles(expanded);
}
