/**
 * リクエストボディの形式検証。
 *
 * 麻雀としての妥当性（牌・枚数・局面）は situation.ts が見る。
 * ここではJSONの構造と型だけを確認する。
 */

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
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    throw new InvalidRequestError('JSONオブジェクトではありません');
  }
  const record = body as Record<string, unknown>;

  return {
    round: requireString(record['round'], 'round'),
    seat: requireString(record['seat'], 'seat'),
    turn: requireNumber(record['turn'], 'turn'),
    dora: requireStringArray(record['dora'], 'dora'),
    hand: requireStringArray(record['hand'], 'hand'),
    draw: optionalString(record['draw'], 'draw'),
    melds: parseMelds(record['melds']),
  };
}

function requireString(value: unknown, key: string): string {
  if (typeof value !== 'string') {
    throw new InvalidRequestError(`${key} は文字列である必要があります`);
  }
  return value;
}

function requireNumber(value: unknown, key: string): number {
  if (typeof value !== 'number') {
    throw new InvalidRequestError(`${key} は数値である必要があります`);
  }
  return value;
}

function optionalString(value: unknown, key: string): string | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }
  return requireString(value, key);
}

function requireStringArray(value: unknown, key: string): string[] {
  if (!Array.isArray(value)) {
    throw new InvalidRequestError(`${key} は配列である必要があります`);
  }
  return value.map((item, index) => requireString(item, `${key}[${index}]`));
}

function parseMelds(value: unknown): MeldInput[] {
  if (value === undefined || value === null) {
    return [];
  }
  if (!Array.isArray(value)) {
    throw new InvalidRequestError('melds は配列である必要があります');
  }
  return value.map((item, index) => parseMeld(item, index));
}

function parseMeld(value: unknown, index: number): MeldInput {
  const key = `melds[${index}]`;
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new InvalidRequestError(`${key} はオブジェクトである必要があります`);
  }
  const record = value as Record<string, unknown>;
  const type = requireString(record['type'], `${key}.type`);
  if (!MELD_TYPES.includes(type as MeldType)) {
    throw new InvalidRequestError(
      `${key}.type は ${MELD_TYPES.join(' / ')} のいずれかです（"${type}"）`,
    );
  }
  return {
    type: type as MeldType,
    tiles: requireStringArray(record['tiles'], `${key}.tiles`),
  };
}
