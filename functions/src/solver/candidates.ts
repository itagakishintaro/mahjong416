/**
 * 全打牌候補の評価。
 *
 * 手牌（ツモ牌を含む）から切れる牌をすべて試し、打牌後のシャンテン数と
 * 受け入れ枚数を求める（nanikiru-ai-design-doc.md §5.2）。
 */

import {concealedTiles, type Hand} from './hand.js';
import {shanten} from './shanten.js';
import {compareTiles, formatTile, type Tile} from './tile.js';
import {ukeire, type UkeireTile} from './ukeire.js';

export type Candidate = {
  readonly discard: Tile;
  /** 打牌後のシャンテン数（和了 -1、テンパイ 0） */
  readonly shanten: number;
  readonly ukeire: readonly UkeireTile[];
  readonly ukeireTotal: number;
};

/**
 * 打牌候補を評価する。
 *
 * 赤ドラは打点が変わるため、5mと赤5mは別の候補として扱う。
 * 副露は打牌できないため候補に含めない。
 *
 * 並び順はシャンテン数の昇順、次に受け入れ枚数の降順、次に牌の正規順。
 */
export function evaluateCandidates(hand: Hand): Candidate[] {
  const tiles = concealedTiles(hand);
  const seen = new Set<string>();
  const candidates: Candidate[] = [];

  for (const [index, discard] of tiles.entries()) {
    const key = formatTile(discard);
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);

    const rest = tiles.filter((_, i) => i !== index);
    const result = ukeire(rest, hand.melds);
    candidates.push({
      discard,
      shanten: shanten(rest, hand.melds.length),
      ukeire: result.tiles,
      ukeireTotal: result.total,
    });
  }

  return candidates.sort(compareCandidates);
}

function compareCandidates(a: Candidate, b: Candidate): number {
  const byShanten = a.shanten - b.shanten;
  if (byShanten !== 0) {
    return byShanten;
  }
  const byUkeire = b.ukeireTotal - a.ukeireTotal;
  if (byUkeire !== 0) {
    return byUkeire;
  }
  return compareTiles(a.discard, b.discard);
}
