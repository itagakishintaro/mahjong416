/**
 * 牌の表記パースと正規化。
 *
 * 表記法（nanikiru-ai-design-doc.md §3.1）:
 *   萬子 1m〜9m / 筒子 1p〜9p / 索子 1s〜9s
 *   風牌 東南西北 / 三元牌 白発中
 *   赤ドラ 赤5m 赤5p 赤5s
 *
 * 字牌は内部的に suit='z' の rank 1〜7（東南西北白発中）として扱う。
 */

export type Suit = 'm' | 'p' | 's' | 'z';

export type Tile = {
  readonly suit: Suit;
  readonly rank: number;
  /** 赤ドラかどうか。シャンテン数・受入の計算では通常牌と同一視する */
  readonly red: boolean;
};

/** 字牌の表記。添字+1が rank に対応する */
const HONORS = ['東', '南', '西', '北', '白', '発', '中'] as const;

export class InvalidTileError extends Error {
  constructor(notation: string, reason: string) {
    super(`不正な牌の表記です: "${notation}" (${reason})`);
    this.name = 'InvalidTileError';
  }
}

/** 牌の表記を1つパースする。不正な表記は InvalidTileError を投げる */
export function parseTile(notation: string): Tile {
  const text = notation.trim();
  if (text === '') {
    throw new InvalidTileError(notation, '空文字');
  }

  const red = text.startsWith('赤');
  const body = red ? text.slice(1) : text;

  const honorIndex = HONORS.indexOf(body as (typeof HONORS)[number]);
  if (honorIndex >= 0) {
    if (red) {
      throw new InvalidTileError(notation, '字牌に赤ドラはない');
    }
    return {suit: 'z', rank: honorIndex + 1, red: false};
  }

  const match = /^([1-9])([mps])$/.exec(body);
  if (match === null) {
    throw new InvalidTileError(notation, '数牌でも字牌でもない');
  }
  const rank = Number(match[1]);
  const suit = match[2] as 'm' | 'p' | 's';

  if (red && rank !== 5) {
    throw new InvalidTileError(notation, '赤ドラは5のみ');
  }
  return {suit, rank, red};
}

/** 牌の配列をまとめてパースする。1つでも不正なら投げる */
export function parseTiles(notations: readonly string[]): Tile[] {
  return notations.map(parseTile);
}

/** 牌を表記へ戻す */
export function formatTile(tile: Tile): string {
  if (tile.suit === 'z') {
    const honor = HONORS[tile.rank - 1];
    if (honor === undefined) {
      throw new InvalidTileError(`z${tile.rank}`, '字牌のrankは1〜7');
    }
    return honor;
  }
  return `${tile.red ? '赤' : ''}${tile.rank}${tile.suit}`;
}

/** 牌の配列を表記へ戻す */
export function formatTiles(tiles: readonly Tile[]): string[] {
  return tiles.map(formatTile);
}

/**
 * 赤ドラを無視した牌の同一性キー。
 * 赤5mと5mは同じ牌として数えるため、枚数の集計にはこのキーを使う。
 */
export function tileKey(tile: Tile): string {
  return formatTile({...tile, red: false});
}

const SUIT_ORDER: Record<Suit, number> = {m: 0, p: 1, s: 2, z: 3};

/**
 * 牌の並び順を比較する。
 * 萬子→筒子→索子→風牌→三元牌の昇順。同じ牌では赤ドラを後ろに置く。
 */
export function compareTiles(a: Tile, b: Tile): number {
  const bySuit = SUIT_ORDER[a.suit] - SUIT_ORDER[b.suit];
  if (bySuit !== 0) {
    return bySuit;
  }
  const byRank = a.rank - b.rank;
  if (byRank !== 0) {
    return byRank;
  }
  return Number(a.red) - Number(b.red);
}

/** 牌の配列を正規の並び順にする。元の配列は破壊しない */
export function sortTiles(tiles: readonly Tile[]): Tile[] {
  return [...tiles].sort(compareTiles);
}

/** 34種すべての牌（赤ドラを除く）を正規順で返す */
export function allTileKinds(): Tile[] {
  const kinds: Tile[] = [];
  for (const suit of ['m', 'p', 's'] as const) {
    for (let rank = 1; rank <= 9; rank++) {
      kinds.push({suit, rank, red: false});
    }
  }
  for (let rank = 1; rank <= 7; rank++) {
    kinds.push({suit: 'z', rank, red: false});
  }
  return kinds;
}
