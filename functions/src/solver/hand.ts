/**
 * 手牌全体の構造とバリデーション。
 *
 * 手牌はツモ牌を含まない純手牌として持ち、ツモ牌は別フィールドにする
 * （nanikiru-ai-design-doc.md §3.2）。副露直後はツモ牌が存在しない。
 */

import {
  compareTiles,
  formatTile,
  parseTile,
  parseTiles,
  sortTiles,
  tileKey,
  type Tile,
} from './tile.js';

export type MeldType = 'pon' | 'chi' | 'minkan' | 'ankan' | 'kakan';

export type Meld = {
  readonly type: MeldType;
  /** 昇順に正規化された構成牌 */
  readonly tiles: readonly Tile[];
};

export type Hand = {
  /** ツモ牌・副露を含まない純手牌。昇順に正規化される */
  readonly tiles: readonly Tile[];
  /** 直前にツモった牌。副露直後は undefined */
  readonly draw: Tile | undefined;
  readonly melds: readonly Meld[];
};

export type MeldInput = {
  readonly type: MeldType;
  readonly tiles: readonly string[];
};

export type HandInput = {
  readonly hand: readonly string[];
  /** JSONから渡るため、キーの省略と undefined の両方を受け付ける */
  readonly draw?: string | undefined;
  readonly melds: readonly MeldInput[];
};

/** 副露の種別ごとの日本語表記 */
const MELD_LABEL: Record<MeldType, string> = {
  pon: 'ポン',
  chi: 'チー',
  minkan: '明カン',
  ankan: '暗カン',
  kakan: '加カン',
};

/** カン系は4枚、それ以外は3枚 */
const MELD_SIZE: Record<MeldType, number> = {
  pon: 3,
  chi: 3,
  minkan: 4,
  ankan: 4,
  kakan: 4,
};

/** 手牌の総数。カンも面子1つ（3枚相当）として数える */
const HAND_SIZE = 14;
const TILES_PER_MELD = 3;
/** 同じ牌は4枚まで */
const MAX_SAME_TILE = 4;

export class InvalidHandError extends Error {
  constructor(reason: string) {
    super(`不正な手牌です: ${reason}`);
    this.name = 'InvalidHandError';
  }
}

/** 入力をパースして検証済みの手牌にする。不正なら InvalidHandError を投げる */
export function parseHand(input: HandInput): Hand {
  const melds = input.melds.map(parseMeld);
  const hand: Hand = {
    tiles: sortTiles(parseTiles(input.hand)),
    draw: input.draw === undefined ? undefined : parseTile(input.draw),
    melds,
  };

  validateSize(hand);
  validateTileCounts(hand);
  return hand;
}

function parseMeld(input: MeldInput): Meld {
  const label = MELD_LABEL[input.type];
  if (label === undefined) {
    throw new InvalidHandError(`未知の副露の種別: ${String(input.type)}`);
  }

  const tiles = sortTiles(parseTiles(input.tiles));
  const size = MELD_SIZE[input.type];
  if (tiles.length !== size) {
    throw new InvalidHandError(
      `${label}は${size}枚である必要があります（${tiles.length}枚）`,
    );
  }

  if (input.type === 'chi') {
    validateChi(tiles);
  } else {
    validateSameTiles(tiles, label);
  }
  return {type: input.type, tiles};
}

/** チーは同色の数牌が連続3枚 */
function validateChi(tiles: readonly Tile[]): void {
  const [first, second, third] = tiles;
  if (first === undefined || second === undefined || third === undefined) {
    throw new InvalidHandError('チーは3枚である必要があります');
  }
  if (first.suit === 'z') {
    throw new InvalidHandError('字牌はチーできません');
  }
  if (first.suit !== second.suit || second.suit !== third.suit) {
    throw new InvalidHandError('チーは同じ色である必要があります');
  }
  if (second.rank !== first.rank + 1 || third.rank !== second.rank + 1) {
    throw new InvalidHandError(
      `チーは連続した3枚である必要があります（${tiles.map(formatTile).join('')}）`,
    );
  }
}

/** ポン・カンは同一牌（赤ドラ違いは同一とみなす） */
function validateSameTiles(tiles: readonly Tile[], label: string): void {
  const keys = new Set(tiles.map(tileKey));
  if (keys.size !== 1) {
    throw new InvalidHandError(
      `${label}は同じ牌である必要があります（${tiles.map(formatTile).join('')}）`,
    );
  }
}

function validateSize(hand: Hand): void {
  const drawCount = hand.draw === undefined ? 0 : 1;
  const total = hand.tiles.length + hand.melds.length * TILES_PER_MELD + drawCount;
  if (total !== HAND_SIZE) {
    throw new InvalidHandError(
      `手牌${hand.tiles.length}枚 + 副露${hand.melds.length}組 + ツモ${drawCount}枚 = ${total}枚相当（${HAND_SIZE}枚である必要があります）`,
    );
  }
  if (hand.melds.length === 0 && hand.draw === undefined) {
    throw new InvalidHandError('副露が無い局面ではツモ牌が必要です');
  }
}

function validateTileCounts(hand: Hand): void {
  for (const [key, count] of tileCounts(hand)) {
    if (count > MAX_SAME_TILE) {
      throw new InvalidHandError(`${key}が${count}枚あります（${MAX_SAME_TILE}枚まで）`);
    }
  }

  const reds = new Map<string, number>();
  for (const tile of allTiles(hand)) {
    if (tile.red) {
      const key = formatTile(tile);
      reds.set(key, (reds.get(key) ?? 0) + 1);
    }
  }
  for (const [key, count] of reds) {
    if (count > 1) {
      throw new InvalidHandError(`${key}が${count}枚あります（赤ドラは各色1枚）`);
    }
  }
}

/** 手牌・ツモ牌・副露のすべての牌 */
function allTiles(hand: Hand): Tile[] {
  const tiles = [...hand.tiles, ...hand.melds.flatMap((meld) => [...meld.tiles])];
  if (hand.draw !== undefined) {
    tiles.push(hand.draw);
  }
  return tiles;
}

/**
 * 打牌候補の元になる牌（手牌 + ツモ牌）を正規順で返す。
 * 副露は打牌できないため含まない。
 */
export function concealedTiles(hand: Hand): Tile[] {
  const tiles = [...hand.tiles];
  if (hand.draw !== undefined) {
    tiles.push(hand.draw);
  }
  return tiles.sort(compareTiles);
}

/**
 * 自分から見えている牌の枚数。赤ドラは通常牌と合算する。
 * 受け入れ枚数の残り枚数算定に使う。
 */
export function tileCounts(hand: Hand): Map<string, number> {
  const counts = new Map<string, number>();
  for (const tile of allTiles(hand)) {
    const key = tileKey(tile);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

/** 副露を日本語表記にする（例: ポン:東東東） */
export function formatMeld(meld: Meld): string {
  return `${MELD_LABEL[meld.type]}:${meld.tiles.map(formatTile).join('')}`;
}

/** 副露の一覧を表記にする。副露が無ければ「なし」 */
export function formatMelds(melds: readonly Meld[]): string {
  if (melds.length === 0) {
    return 'なし';
  }
  return melds.map(formatMeld).join(' ');
}
