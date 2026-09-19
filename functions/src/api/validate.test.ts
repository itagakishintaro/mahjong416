import {describe, expect, it} from 'vitest';
import {InvalidRequestError, parseRequest} from './validate.js';

const BODY = {
  round: '東1局',
  seat: '南家',
  turn: 7,
  dora: ['5s'],
  hand: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '東', '東', '1p', '2p'],
  draw: '5s',
  melds: [],
};

describe('parseRequest', () => {
  it('正当なリクエストを通す', () => {
    expect(parseRequest(BODY)).toEqual(BODY);
  });

  it('melds と draw は省略できる', () => {
    const parsed = parseRequest({
      ...BODY,
      hand: [...BODY.hand, '3p'],
      draw: undefined,
      melds: undefined,
    });
    expect(parsed.melds).toEqual([]);
    expect(parsed.draw).toBeUndefined();
  });

  it('副露を受け取る', () => {
    const parsed = parseRequest({
      ...BODY,
      hand: ['1m', '2m', '3m', '4m', '5m', '6m', '1s', '2s', '東', '東'],
      draw: '9p',
      melds: [{type: 'pon', tiles: ['白', '白', '白']}],
    });
    expect(parsed.melds).toEqual([{type: 'pon', tiles: ['白', '白', '白']}]);
  });
});

describe('parseRequest: 不正なリクエスト', () => {
  it('オブジェクトでなければ拒否する', () => {
    for (const body of [null, undefined, 'text', 42, []]) {
      expect(() => parseRequest(body), String(body)).toThrow(InvalidRequestError);
    }
  });

  it('必須項目が欠けていれば拒否する', () => {
    for (const key of ['round', 'seat', 'turn', 'dora', 'hand']) {
      const body: Record<string, unknown> = {...BODY};
      delete body[key];
      expect(() => parseRequest(body), key).toThrow(InvalidRequestError);
    }
  });

  it('型が違えば拒否する', () => {
    expect(() => parseRequest({...BODY, round: 1})).toThrow(InvalidRequestError);
    expect(() => parseRequest({...BODY, turn: '7'})).toThrow(InvalidRequestError);
    expect(() => parseRequest({...BODY, dora: '5s'})).toThrow(InvalidRequestError);
    expect(() => parseRequest({...BODY, hand: [1, 2]})).toThrow(InvalidRequestError);
    expect(() => parseRequest({...BODY, draw: 5})).toThrow(InvalidRequestError);
  });

  it('副露の形式が違えば拒否する', () => {
    expect(() => parseRequest({...BODY, melds: [{tiles: ['白']}]})).toThrow(InvalidRequestError);
    expect(() => parseRequest({...BODY, melds: [{type: 'pon'}]})).toThrow(InvalidRequestError);
    expect(() => parseRequest({...BODY, melds: [{type: 'kan', tiles: ['白']}]})).toThrow(InvalidRequestError);
    expect(() => parseRequest({...BODY, melds: 'pon'})).toThrow(InvalidRequestError);
  });
});
