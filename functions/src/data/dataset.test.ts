import {describe, expect, it} from 'vitest';
import {buildDataset} from './dataset.js';
import {parseProblem, type Problem} from './problem.js';

const RAW = {
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
  meta: {split: 'train', createdAt: '2026-09-19', reviewed: true},
};

function problem(overrides: Record<string, unknown> = {}): Problem {
  return parseProblem({...RAW, ...overrides});
}

function withMeta(meta: Record<string, unknown>, id = '0001'): Problem {
  return parseProblem({...RAW, id, meta: {...RAW.meta, ...meta}});
}

describe('buildDataset', () => {
  it('split ごとに振り分ける', () => {
    const result = buildDataset([
      withMeta({split: 'train'}, '0001'),
      withMeta({split: 'validation'}, '0002'),
    ]);
    expect(result.train).toHaveLength(1);
    expect(result.validation).toHaveLength(1);
  });

  it('テスト用の問題は学習に使わない', () => {
    const result = buildDataset([withMeta({split: 'test'})]);
    expect(result.train).toEqual([]);
    expect(result.validation).toEqual([]);
    expect(result.stats.test).toBe(1);
  });

  it('未レビューの問題は除外する', () => {
    const result = buildDataset([withMeta({reviewed: false})]);
    expect(result.train).toEqual([]);
    expect(result.stats.skippedUnreviewed).toBe(1);
  });

  it('悪手が無い問題は除外する', () => {
    const result = buildDataset([problem({rejected: []})]);
    expect(result.train).toEqual([]);
    expect(result.stats.skippedNoRejected).toBe(1);
  });

  it('悪手の数だけペアが増える', () => {
    const result = buildDataset([
      problem({
        rejected: [
          {discard: '東', reason: '理由1'},
          {discard: '1p', reason: '理由2'},
        ],
      }),
    ]);
    expect(result.train).toHaveLength(2);
  });

  it('統計を返す', () => {
    const result = buildDataset([
      withMeta({split: 'train'}, '0001'),
      withMeta({split: 'validation'}, '0002'),
      withMeta({split: 'test'}, '0003'),
      withMeta({reviewed: false}, '0004'),
    ]);
    expect(result.stats).toEqual({
      total: 4,
      used: 2,
      test: 1,
      skippedUnreviewed: 1,
      skippedNoRejected: 0,
      trainPairs: 1,
      validationPairs: 1,
    });
  });

  it('問題が無ければ空を返す', () => {
    const result = buildDataset([]);
    expect(result.train).toEqual([]);
    expect(result.stats.total).toBe(0);
  });
});
