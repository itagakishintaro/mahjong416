/**
 * リクエストボディの形式検証。
 *
 * 麻雀としての妥当性（牌・枚数・局面）は situation.ts が見る。
 * ここではJSONの構造と型だけを確認する。
 */

import {
  JsonFieldError,
  optionalString,
  requireArray,
  requireEnum,
  requireNumber,
  requireObject,
  requireString,
  requireStringArray,
} from '../json.js';
import {type MeldInput, type MeldType} from '../solver/hand.js';
import {type SituationInput} from '../situation.js';

const MELD_TYPES: readonly MeldType[] = [
  'pon',
  'chi',
  'minkan',
  'ankan',
  'kakan',
];

export class InvalidRequestError extends Error {
  constructor(reason: string) {
    super(`リクエストが不正です: ${reason}`);
    this.name = 'InvalidRequestError';
  }
}

/** 未検証のリクエストボディを SituationInput にする */
export function parseRequest(body: unknown): SituationInput {
  try {
    return readRequest(body);
  } catch (error) {
    if (error instanceof JsonFieldError) {
      throw new InvalidRequestError(error.message);
    }
    throw error;
  }
}

function readRequest(body: unknown): SituationInput {
  const record = requireObject(body, 'リクエスト');
  return {
    round: requireString(record['round'], 'round'),
    seat: requireString(record['seat'], 'seat'),
    turn: requireNumber(record['turn'], 'turn'),
    dora: requireStringArray(record['dora'], 'dora'),
    hand: requireStringArray(record['hand'], 'hand'),
    draw: optionalString(record['draw'], 'draw'),
    melds: readMelds(record['melds']),
  };
}

function readMelds(value: unknown): MeldInput[] {
  if (value === undefined || value === null) {
    return [];
  }
  return requireArray(value, 'melds').map((item, index) => {
    const field = `melds[${index}]`;
    const record = requireObject(item, field);
    return {
      type: requireEnum(record['type'], MELD_TYPES, `${field}.type`),
      tiles: requireStringArray(record['tiles'], `${field}.tiles`),
    };
  });
}
