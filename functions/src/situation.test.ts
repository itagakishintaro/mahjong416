import {describe, expect, it} from 'vitest';
import {formatTile} from './solver/tile.js';
import {parseSituation, type SituationInput} from './situation.js';

const BASE: SituationInput = {
  round: '東1局',
  seat: '南家',
  turn: 7,
  dora: ['5s'],
  hand: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '東', '東', '1p', '2p'],
  draw: '5s',
  melds: [],
};

describe('parseSituation: 局', () => {
  it('東場・南場の各局を受け付ける', () => {
    for (const round of ['東1局', '東4局', '南1局', '南4局']) {
      expect(() => parseSituation({...BASE, round})).not.toThrow();
    }
  });

  it('存在しない局を拒否する', () => {
    for (const round of ['西1局', '東5局', '東1', '', '南0局']) {
      expect(() => parseSituation({...BASE, round}), round).toThrow();
    }
  });
});

describe('parseSituation: 自風', () => {
  it('4つの自風を受け付ける', () => {
    for (const seat of ['東家', '南家', '西家', '北家']) {
      expect(() => parseSituation({...BASE, seat})).not.toThrow();
    }
  });

  it('存在しない自風を拒否する', () => {
    for (const seat of ['親', '東', '', '五家']) {
      expect(() => parseSituation({...BASE, seat}), seat).toThrow();
    }
  });
});

describe('parseSituation: 巡目', () => {
  it('1〜18巡目を受け付ける', () => {
    for (const turn of [1, 7, 18]) {
      expect(() => parseSituation({...BASE, turn})).not.toThrow();
    }
  });

  it('範囲外・整数でない巡目を拒否する', () => {
    for (const turn of [0, -1, 19, 1.5, Number.NaN]) {
      expect(() => parseSituation({...BASE, turn}), String(turn)).toThrow();
    }
  });
});

describe('parseSituation: ドラ', () => {
  it('複数のドラを受け付ける', () => {
    const situation = parseSituation({...BASE, dora: ['5s', '東', '9p']});
    expect(situation.dora.map(formatTile)).toEqual(['9p', '5s', '東']);
  });

  it('ドラが無い状態を拒否する', () => {
    expect(() => parseSituation({...BASE, dora: []})).toThrow();
  });

  it('ドラが多すぎる状態を拒否する', () => {
    expect(() =>
      parseSituation({...BASE, dora: ['1m', '2m', '3m', '4m', '5m', '6m']}),
    ).toThrow();
  });

  it('ドラの指定に赤ドラ表記は使えない', () => {
    expect(() => parseSituation({...BASE, dora: ['赤5m']})).toThrow();
  });

  it('不正な牌のドラを拒否する', () => {
    expect(() => parseSituation({...BASE, dora: ['0m']})).toThrow();
  });
});

describe('parseSituation: 手牌', () => {
  it('手牌のバリデーションを通す', () => {
    expect(() => parseSituation({...BASE, hand: BASE.hand.slice(1)})).toThrow();
  });

  it('パース済みの手牌を保持する', () => {
    const situation = parseSituation(BASE);
    expect(situation.hand.tiles).toHaveLength(13);
    expect(situation.hand.draw && formatTile(situation.hand.draw)).toBe('5s');
  });
});
