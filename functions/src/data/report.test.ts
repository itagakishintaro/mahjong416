import {describe, expect, it} from 'vitest';
import {buildProblemReport} from './report.js';
import {parseProblem} from './problem.js';

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
  rejected: [],
  meta: {split: 'train', createdAt: '2026-09-19', reviewed: false},
};

const report = () => buildProblemReport(parseProblem(RAW));

describe('buildProblemReport', () => {
  it('正解打牌のシャンテン数と受入を返す', () => {
    const {answer} = report();
    expect(answer.discard).toBe('5s');
    expect(answer.shanten).toBe(0);
    expect(answer.ukeireTotal).toBe(4);
  });

  it('ソルバー上の最良手を返す', () => {
    expect(report().best.discard).toBe('5s');
  });

  it('正解が最良手かどうかを示す', () => {
    expect(report().answerIsBest).toBe(true);
  });

  it('正解が最良手でない場合を示す', () => {
    const result = buildProblemReport(
      parseProblem({...RAW, answer: {discard: '東', reason: '理由'}}),
    );
    expect(result.answerIsBest).toBe(false);
    expect(result.best.discard).toBe('5s');
  });

  it('悪手の候補を提案する', () => {
    const suggestions = report().suggestedRejected;
    expect(suggestions.length).toBeGreaterThan(0);
    expect(suggestions[0]).toHaveProperty('kind');
    expect(suggestions[0]).toHaveProperty('discard');
  });

  it('既に悪手が書かれていれば提案しない', () => {
    const result = buildProblemReport(
      parseProblem({...RAW, rejected: [{discard: '東', reason: '理由'}]}),
    );
    expect(result.suggestedRejected).toEqual([]);
  });

  it('全打牌候補を返す', () => {
    expect(report().candidates.length).toBeGreaterThan(5);
    expect(report().candidates[0]).toMatchObject({discard: '5s', shanten: 0});
  });

  it('局面の要約を返す', () => {
    const {situation} = report();
    expect(situation).toContain('東1局');
    expect(situation).toContain('南家');
    expect(situation).toContain('7巡目');
    expect(situation).toContain('【手牌】');
  });
});

describe('buildProblemReport: 受入が同数の打牌が複数ある場合', () => {
  it('並び順で先頭でなくても最良手と同等とみなす', () => {
    // 1s切りと2s切りはシャンテン数・受入枚数が同じ
    const result = buildProblemReport(
      parseProblem({
        id: '0002',
        situation: {
          round: '東1局',
          seat: '西家',
          turn: 7,
          dora: ['南'],
          hand: ['6p', '7p', '7p', '8p', '1s', '1s', '2s', '2s', '3s', '4s', '5s', '中', '中'],
          draw: '赤5p',
          melds: [],
        },
        answer: {discard: '2s', reason: '理由'},
        rejected: [],
        meta: {split: 'train', createdAt: '2026-09-20', reviewed: false},
      }),
    );
    expect(result.best.discard).toBe('1s');
    expect(result.answer.discard).toBe('2s');
    expect(result.answer.ukeireTotal).toBe(result.best.ukeireTotal);
    expect(result.answerIsBest).toBe(true);
  });
});
