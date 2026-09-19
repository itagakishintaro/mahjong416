import {describe, expect, it} from 'vitest';
import {nearBestDiscards, summarize, type Evaluation} from './metrics.js';
import {type Candidate} from '../solver/candidates.js';
import {parseTile} from '../solver/tile.js';

function candidate(discard: string, shanten: number, ukeireTotal: number): Candidate {
  return {discard: parseTile(discard), shanten, ukeire: [], ukeireTotal};
}

function evaluation(overrides: Partial<Evaluation> = {}): Evaluation {
  return {
    problemId: '0001',
    expected: '9m',
    actual: '9m',
    rejected: ['東'],
    nearBest: ['9m', '1m'],
    numbersConsistent: true,
    ...overrides,
  };
}

describe('nearBestDiscards', () => {
  it('最良手と同じシャンテン数で受入85%以上の打牌を返す', () => {
    expect(
      nearBestDiscards([
        candidate('9m', 1, 20),
        candidate('1m', 1, 17),
        candidate('1p', 1, 16),
        candidate('東', 2, 30),
      ]),
    ).toEqual(['9m', '1m']);
  });

  it('候補が無ければ空を返す', () => {
    expect(nearBestDiscards([])).toEqual([]);
  });
});

describe('summarize', () => {
  it('厳格正解率を出す', () => {
    const metrics = summarize([
      evaluation(),
      evaluation({actual: '1m'}),
      evaluation(),
      evaluation(),
    ]);
    expect(metrics.total).toBe(4);
    expect(metrics.strictAccuracy).toBe(0.75);
  });

  it('準最善一致率を出す', () => {
    const metrics = summarize([
      evaluation({actual: '1m'}), // 準最善に含まれる
      evaluation({actual: '1p'}), // 含まれない
    ]);
    expect(metrics.strictAccuracy).toBe(0);
    expect(metrics.nearBestRate).toBe(0.5);
  });

  it('悪手回答率を出す', () => {
    const metrics = summarize([evaluation({actual: '東'}), evaluation()]);
    expect(metrics.badDiscardRate).toBe(0.5);
  });

  it('数値整合率を出す', () => {
    const metrics = summarize([
      evaluation({numbersConsistent: false}),
      evaluation(),
      evaluation(),
      evaluation(),
    ]);
    expect(metrics.numberConsistencyRate).toBe(0.75);
  });

  it('正解した場合は悪手回答に数えない', () => {
    expect(summarize([evaluation()]).badDiscardRate).toBe(0);
  });

  it('評価が空でも0を返す', () => {
    expect(summarize([])).toEqual({
      total: 0,
      strictAccuracy: 0,
      nearBestRate: 0,
      badDiscardRate: 0,
      numberConsistencyRate: 0,
      misses: [],
    });
  });
});

describe('summarize: 誤答の一覧', () => {
  it('厳格正解でなかった問題を残す', () => {
    const metrics = summarize([
      evaluation(),
      evaluation({problemId: '0002', actual: '1m'}),
      evaluation({problemId: '0003', actual: '東'}),
    ]);
    expect(metrics.misses.map(({problemId}) => problemId)).toEqual(['0002', '0003']);
  });

  it('誤答に期待値と実際の打牌を含める', () => {
    const metrics = summarize([evaluation({actual: '東'})]);
    expect(metrics.misses[0]).toMatchObject({
      problemId: '0001',
      expected: '9m',
      actual: '東',
      isRejected: true,
      isNearBest: false,
    });
  });
});
