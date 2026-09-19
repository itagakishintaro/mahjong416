import {describe, expect, it} from 'vitest';
import {InvalidProblemError, parseProblem} from './problem.js';
import {formatTile} from '../solver/tile.js';

const VALID = {
  id: '0001',
  situation: {
    round: '東1局',
    seat: '南家',
    turn: 7,
    dora: ['5s'],
    hand: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '東', '東', '1p', '2p'],
    draw: '5s',
    melds: [],
  },
  answer: {discard: '5s', reason: '5sは孤立牌のため。'},
  rejected: [{discard: '東', reason: '自風は重なれば役になる。'}],
  meta: {split: 'train', source: '何切る問題集', createdAt: '2026-09-19', reviewed: true},
};

describe('parseProblem', () => {
  it('正当な問題を読み込む', () => {
    const problem = parseProblem(VALID);
    expect(problem.id).toBe('0001');
    expect(formatTile(problem.answer.discard)).toBe('5s');
    expect(problem.answer.reason).toBe('5sは孤立牌のため。');
    expect(problem.rejected).toHaveLength(1);
    expect(formatTile(problem.rejected[0]!.discard)).toBe('東');
  });

  it('局面をパース済みの形で保持する', () => {
    const problem = parseProblem(VALID);
    expect(problem.situation.round).toBe('東1局');
    expect(problem.situation.hand.tiles).toHaveLength(13);
  });

  it('メタ情報を保持する', () => {
    const problem = parseProblem(VALID);
    expect(problem.meta).toEqual({
      split: 'train',
      source: '何切る問題集',
      createdAt: '2026-09-19',
      reviewed: true,
    });
  });

  it('source は省略できる', () => {
    const problem = parseProblem({...VALID, meta: {...VALID.meta, source: undefined}});
    expect(problem.meta.source).toBeUndefined();
  });

  it('rejected が空でも読み込める（生成前の状態）', () => {
    expect(parseProblem({...VALID, rejected: []}).rejected).toEqual([]);
  });
});

describe('parseProblem: 不正な問題', () => {
  it('必須項目が欠けていれば拒否する', () => {
    for (const key of ['id', 'situation', 'answer', 'rejected', 'meta']) {
      const body: Record<string, unknown> = {...VALID};
      delete body[key];
      expect(() => parseProblem(body), key).toThrow(InvalidProblemError);
    }
  });

  it('id が空文字なら拒否する', () => {
    expect(() => parseProblem({...VALID, id: ''})).toThrow(InvalidProblemError);
  });

  it('split が候補外なら拒否する', () => {
    expect(() => parseProblem({...VALID, meta: {...VALID.meta, split: 'dev'}})).toThrow(
      InvalidProblemError,
    );
  });

  it('3つの split を受け付ける', () => {
    for (const split of ['train', 'validation', 'test']) {
      expect(() => parseProblem({...VALID, meta: {...VALID.meta, split}})).not.toThrow();
    }
  });

  it('createdAt が日付形式でなければ拒否する', () => {
    expect(() => parseProblem({...VALID, meta: {...VALID.meta, createdAt: '2026/09/19'}})).toThrow(
      InvalidProblemError,
    );
  });

  it('局面が麻雀として不正なら拒否する', () => {
    expect(() =>
      parseProblem({...VALID, situation: {...VALID.situation, turn: 99}}),
    ).toThrow(InvalidProblemError);
  });

  it('正解の打牌が手牌に無ければ拒否する', () => {
    expect(() =>
      parseProblem({...VALID, answer: {discard: '9s', reason: '理由'}}),
    ).toThrow(InvalidProblemError);
  });

  it('悪手の打牌が手牌に無ければ拒否する', () => {
    expect(() =>
      parseProblem({...VALID, rejected: [{discard: '9s', reason: '理由'}]}),
    ).toThrow(InvalidProblemError);
  });

  it('正解と同じ牌を悪手にしていれば拒否する', () => {
    expect(() =>
      parseProblem({...VALID, rejected: [{discard: '5s', reason: '理由'}]}),
    ).toThrow(InvalidProblemError);
  });

  it('理由が空なら拒否する', () => {
    expect(() => parseProblem({...VALID, answer: {discard: '5s', reason: '  '}})).toThrow(
      InvalidProblemError,
    );
  });
});
