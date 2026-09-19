/**
 * 何切る問題マスタのスキーマとパース。
 *
 * data/problems/NNNN.json が正本であり、DPO用のJSONLはここから生成する
 * （nanikiru-ai-design-doc.md §6.1, §6.2）。
 */

import {
  JsonFieldError,
  optionalString,
  requireArray,
  requireBoolean,
  requireEnum,
  requireNumber,
  requireObject,
  requireString,
  requireStringArray,
} from '../json.js';
import {formatTile, parseTile, type Tile} from '../solver/tile.js';
import {concealedTiles} from '../solver/hand.js';
import {
  InvalidSituationError,
  parseSituation,
  type Situation,
  type SituationInput,
} from '../situation.js';
import {InvalidHandError, type MeldInput, type MeldType} from '../solver/hand.js';
import {InvalidTileError} from '../solver/tile.js';

export const SPLITS = ['train', 'validation', 'test'] as const;
export type Split = (typeof SPLITS)[number];

const MELD_TYPES: readonly MeldType[] = [
  'pon',
  'chi',
  'minkan',
  'ankan',
  'kakan',
];

/** YYYY-MM-DD */
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export type Discard = {
  readonly discard: Tile;
  readonly reason: string;
};

export type Problem = {
  readonly id: string;
  readonly situation: Situation;
  readonly answer: Discard;
  /** 明確な悪手。生成前は空になりうる */
  readonly rejected: readonly Discard[];
  readonly meta: {
    readonly split: Split;
    readonly source: string | undefined;
    readonly createdAt: string;
    readonly reviewed: boolean;
  };
};

export class InvalidProblemError extends Error {
  constructor(reason: string) {
    super(`問題データが不正です: ${reason}`);
    this.name = 'InvalidProblemError';
  }
}

/** 問題マスタのJSONを読み込む */
export function parseProblem(value: unknown): Problem {
  try {
    return readProblem(value);
  } catch (error) {
    if (
      error instanceof JsonFieldError ||
      error instanceof InvalidSituationError ||
      error instanceof InvalidHandError ||
      error instanceof InvalidTileError
    ) {
      throw new InvalidProblemError(error.message);
    }
    throw error;
  }
}

function readProblem(value: unknown): Problem {
  const record = requireObject(value, '問題');
  const id = requireString(record['id'], 'id');
  if (id.trim() === '') {
    throw new JsonFieldError('id が空です');
  }

  const situation = parseSituation(readSituationInput(record['situation']));
  const discardable = new Set(concealedTiles(situation.hand).map(formatTile));

  const answer = readDiscard(record['answer'], 'answer', discardable);
  const rejected = requireArray(record['rejected'], 'rejected').map(
    (item, index) => readDiscard(item, `rejected[${index}]`, discardable),
  );

  for (const [index, entry] of rejected.entries()) {
    if (formatTile(entry.discard) === formatTile(answer.discard)) {
      throw new JsonFieldError(
        `rejected[${index}] が正解と同じ打牌です（${formatTile(answer.discard)}）`,
      );
    }
  }

  return {id, situation, answer, rejected, meta: readMeta(record['meta'])};
}

function readSituationInput(value: unknown): SituationInput {
  const record = requireObject(value, 'situation');
  return {
    round: requireString(record['round'], 'situation.round'),
    seat: requireString(record['seat'], 'situation.seat'),
    turn: requireNumber(record['turn'], 'situation.turn'),
    dora: requireStringArray(record['dora'], 'situation.dora'),
    hand: requireStringArray(record['hand'], 'situation.hand'),
    draw: optionalString(record['draw'], 'situation.draw'),
    melds: readMelds(record['melds']),
  };
}

function readMelds(value: unknown): MeldInput[] {
  if (value === undefined || value === null) {
    return [];
  }
  return requireArray(value, 'situation.melds').map((item, index) => {
    const field = `situation.melds[${index}]`;
    const record = requireObject(item, field);
    return {
      type: requireEnum(record['type'], MELD_TYPES, `${field}.type`),
      tiles: requireStringArray(record['tiles'], `${field}.tiles`),
    };
  });
}

/**
 * 打牌と理由を読み、その牌が実際に切れるかまで確認する。
 * 転記ミスをここで弾かないと、誤った学習データが作られてしまう。
 */
function readDiscard(
  value: unknown,
  field: string,
  discardable: ReadonlySet<string>,
): Discard {
  const record = requireObject(value, field);
  const notation = requireString(record['discard'], `${field}.discard`);
  if (!discardable.has(notation)) {
    throw new JsonFieldError(
      `${field}.discard「${notation}」は手牌にありません`,
    );
  }

  const reason = requireString(record['reason'], `${field}.reason`);
  if (reason.trim() === '') {
    throw new JsonFieldError(`${field}.reason が空です`);
  }

  return {discard: parseTile(notation), reason: reason.trim()};
}

function readMeta(value: unknown): Problem['meta'] {
  const record = requireObject(value, 'meta');
  const createdAt = requireString(record['createdAt'], 'meta.createdAt');
  if (!DATE_PATTERN.test(createdAt)) {
    throw new JsonFieldError(
      `meta.createdAt は YYYY-MM-DD 形式です（"${createdAt}"）`,
    );
  }
  return {
    split: requireEnum(record['split'], SPLITS, 'meta.split'),
    source: optionalString(record['source'], 'meta.source'),
    createdAt,
    reviewed: requireBoolean(record['reviewed'], 'meta.reviewed'),
  };
}
