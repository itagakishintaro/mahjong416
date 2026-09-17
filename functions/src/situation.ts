/**
 * 局面（局・自風・巡目・ドラ・手牌）の表現とバリデーション。
 *
 * 捨て牌・点棒状況・他家の情報は入力対象外
 * （nanikiru-ai-design-doc.md §3.2）。
 */

import {parseHand, type Hand, type HandInput} from './solver/hand.js';
import {parseTile, sortTiles, type Tile} from './solver/tile.js';

export const ROUNDS = [
  '東1局',
  '東2局',
  '東3局',
  '東4局',
  '南1局',
  '南2局',
  '南3局',
  '南4局',
] as const;
export type Round = (typeof ROUNDS)[number];

export const SEATS = ['東家', '南家', '西家', '北家'] as const;
export type Seat = (typeof SEATS)[number];

/** 半荘の1局で打てる最大巡目 */
const MAX_TURN = 18;
/** 新ドラを含むドラの上限（カン4回分 + 表ドラ） */
const MAX_DORA = 5;

export type Situation = {
  readonly round: Round;
  readonly seat: Seat;
  readonly turn: number;
  /** ドラそのもの（ドラ表示牌ではない） */
  readonly dora: readonly Tile[];
  readonly hand: Hand;
};

export type SituationInput = HandInput & {
  readonly round: string;
  readonly seat: string;
  readonly turn: number;
  readonly dora: readonly string[];
};

export class InvalidSituationError extends Error {
  constructor(reason: string) {
    super(`不正な局面です: ${reason}`);
    this.name = 'InvalidSituationError';
  }
}

/** 入力をパースして検証済みの局面にする */
export function parseSituation(input: SituationInput): Situation {
  return {
    round: parseRound(input.round),
    seat: parseSeat(input.seat),
    turn: parseTurn(input.turn),
    dora: parseDora(input.dora),
    hand: parseHand(input),
  };
}

function parseRound(round: string): Round {
  if (!(ROUNDS as readonly string[]).includes(round)) {
    throw new InvalidSituationError(
      `局は ${ROUNDS.join(' / ')} のいずれかです（"${round}"）`,
    );
  }
  return round as Round;
}

function parseSeat(seat: string): Seat {
  if (!(SEATS as readonly string[]).includes(seat)) {
    throw new InvalidSituationError(
      `自風は ${SEATS.join(' / ')} のいずれかです（"${seat}"）`,
    );
  }
  return seat as Seat;
}

function parseTurn(turn: number): number {
  if (!Number.isInteger(turn) || turn < 1 || turn > MAX_TURN) {
    throw new InvalidSituationError(
      `巡目は1〜${MAX_TURN}の整数です（${String(turn)}）`,
    );
  }
  return turn;
}

function parseDora(dora: readonly string[]): Tile[] {
  if (dora.length === 0) {
    throw new InvalidSituationError('ドラが指定されていません');
  }
  if (dora.length > MAX_DORA) {
    throw new InvalidSituationError(
      `ドラは${MAX_DORA}枚までです（${dora.length}枚）`,
    );
  }

  const tiles = dora.map((notation) => {
    const tile = parseTile(notation);
    if (tile.red) {
      throw new InvalidSituationError(
        `ドラの指定に赤ドラ表記は使えません（"${notation}"）`,
      );
    }
    return tile;
  });
  return sortTiles(tiles);
}
