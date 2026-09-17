import {describe, expect, it} from 'vitest';
import {formatTiles, parseTile} from './tile.js';
import {
  concealedTiles,
  formatMeld,
  formatMelds,
  parseHand,
  tileCounts,
  type HandInput,
} from './hand.js';

/** 副露なし・ツモありの正当な手牌（13枚 + ツモ1） */
const VALID: HandInput = {
  hand: [
    '1m',
    '9m',
    '9m',
    '2m',
    '3m',
    '4m',
    '5p',
    '6p',
    '赤5p',
    '3s',
    '3s',
    '東',
    '東',
  ],
  draw: '9m',
  melds: [],
};

describe('parseHand: 枚数の整合', () => {
  it('副露なしは手牌13枚 + ツモ1枚を受け付ける', () => {
    expect(() => parseHand(VALID)).not.toThrow();
  });

  it('副露1つは手牌10枚 + ツモ1枚を受け付ける', () => {
    expect(() =>
      parseHand({
        hand: ['1m', '2m', '3m', '5p', '6p', '7p', '3s', '3s', '東', '東'],
        draw: '9s',
        melds: [{type: 'pon', tiles: ['白', '白', '白']}],
      }),
    ).not.toThrow();
  });

  it('副露4つは手牌1枚 + ツモ1枚を受け付ける', () => {
    expect(() =>
      parseHand({
        hand: ['東'],
        draw: '東',
        melds: [
          {type: 'pon', tiles: ['白', '白', '白']},
          {type: 'ankan', tiles: ['9s', '9s', '9s', '9s']},
          {type: 'chi', tiles: ['1m', '2m', '3m']},
          {type: 'minkan', tiles: ['発', '発', '発', '発']},
        ],
      }),
    ).not.toThrow();
  });

  it('副露直後（ツモ牌なし）は手牌11枚を受け付ける', () => {
    expect(() =>
      parseHand({
        hand: ['1m', '2m', '3m', '5p', '6p', '7p', '3s', '3s', '東', '東', '南'],
        melds: [{type: 'pon', tiles: ['白', '白', '白']}],
      }),
    ).not.toThrow();
  });

  it('枚数が合わない手牌を拒否する', () => {
    expect(() => parseHand({...VALID, hand: VALID.hand.slice(1)})).toThrow();
    expect(() =>
      parseHand({...VALID, hand: [...VALID.hand, '1p']}),
    ).toThrow();
  });

  it('副露なしでツモ牌が無い状態を拒否する', () => {
    expect(() =>
      parseHand({hand: [...VALID.hand, '9m'], melds: []}),
    ).toThrow();
  });
});

describe('parseHand: 牌の枚数制限', () => {
  it('同一牌が5枚あると拒否する', () => {
    expect(() =>
      parseHand({
        hand: ['1m', '1m', '1m', '1m', '2m', '3m', '4m', '5p', '6p', '7p', '3s', '3s', '東'],
        draw: '1m',
        melds: [],
      }),
    ).toThrow();
  });

  it('赤5mと5mを合わせて5枚あると拒否する', () => {
    expect(() =>
      parseHand({
        hand: ['5m', '5m', '5m', '赤5m', '2m', '3m', '4m', '5p', '6p', '7p', '3s', '3s', '東'],
        draw: '5m',
        melds: [],
      }),
    ).toThrow();
  });

  it('副露の牌も合算して数える', () => {
    expect(() =>
      parseHand({
        hand: ['白', '白', '1m', '2m', '3m', '5p', '6p', '7p', '3s', '3s'],
        draw: '白',
        melds: [{type: 'pon', tiles: ['白', '白', '白']}],
      }),
    ).toThrow();
  });

  it('カンで同一牌4枚は許容する', () => {
    expect(() =>
      parseHand({
        hand: ['1m', '2m', '3m', '5p', '6p', '7p', '3s', '3s', '東', '東'],
        draw: '南',
        melds: [{type: 'ankan', tiles: ['白', '白', '白', '白']}],
      }),
    ).not.toThrow();
  });

  it('同じ赤ドラが2枚あると拒否する', () => {
    expect(() =>
      parseHand({
        hand: ['赤5m', '赤5m', '1m', '2m', '3m', '5p', '6p', '7p', '3s', '3s', '東', '東', '南'],
        draw: '南',
        melds: [],
      }),
    ).toThrow();
  });
});

describe('parseHand: 副露の形', () => {
  const withMeld = (meld: HandInput['melds'][number]): HandInput => ({
    hand: ['1m', '2m', '3m', '5p', '6p', '7p', '3s', '3s', '東', '東'],
    draw: '南',
    melds: [meld],
  });

  it('正当な副露を受け付ける', () => {
    expect(() => parseHand(withMeld({type: 'pon', tiles: ['白', '白', '白']}))).not.toThrow();
    expect(() => parseHand(withMeld({type: 'chi', tiles: ['3p', '4p', '赤5p']}))).not.toThrow();
    expect(() => parseHand(withMeld({type: 'minkan', tiles: ['9s', '9s', '9s', '9s']}))).not.toThrow();
    expect(() => parseHand(withMeld({type: 'kakan', tiles: ['2p', '2p', '2p', '2p']}))).not.toThrow();
  });

  it('ポンが同一牌3枚でなければ拒否する', () => {
    expect(() => parseHand(withMeld({type: 'pon', tiles: ['白', '白', '発']}))).toThrow();
    expect(() => parseHand(withMeld({type: 'pon', tiles: ['白', '白']}))).toThrow();
  });

  it('チーが同色の連続3枚でなければ拒否する', () => {
    expect(() => parseHand(withMeld({type: 'chi', tiles: ['3p', '4p', '6p']}))).toThrow();
    expect(() => parseHand(withMeld({type: 'chi', tiles: ['3m', '4p', '5s']}))).toThrow();
    expect(() => parseHand(withMeld({type: 'chi', tiles: ['東', '南', '西']}))).toThrow();
    expect(() => parseHand(withMeld({type: 'chi', tiles: ['3p', '3p', '4p']}))).toThrow();
  });

  it('カンが同一牌4枚でなければ拒否する', () => {
    expect(() => parseHand(withMeld({type: 'ankan', tiles: ['9s', '9s', '9s']}))).toThrow();
    expect(() => parseHand(withMeld({type: 'minkan', tiles: ['9s', '9s', '9s', '8s']}))).toThrow();
  });
});

describe('concealedTiles', () => {
  it('手牌とツモ牌を結合して正規順に並べる', () => {
    const hand = parseHand({
      hand: ['東', '9m', '1m', '5s'],
      draw: '5p',
      melds: [
        {type: 'pon', tiles: ['白', '白', '白']},
        {type: 'chi', tiles: ['1s', '2s', '3s']},
        {type: 'ankan', tiles: ['2p', '2p', '2p', '2p']},
      ],
    });
    expect(formatTiles(concealedTiles(hand))).toEqual([
      '1m',
      '9m',
      '5p',
      '5s',
      '東',
    ]);
  });

  it('ツモ牌が無ければ手牌のみを返す', () => {
    const hand = parseHand({
      hand: ['1m', '2m', '3m', '5p', '6p', '7p', '3s', '3s', '東', '東', '南'],
      melds: [{type: 'pon', tiles: ['白', '白', '白']}],
    });
    expect(concealedTiles(hand)).toHaveLength(11);
  });
});

describe('tileCounts', () => {
  it('副露を含めた見えている牌の枚数を返す', () => {
    const hand = parseHand({
      hand: ['1m', '2m', '3m', '5p', '6p', '7p', '3s', '3s', '東', '東'],
      draw: '白',
      melds: [{type: 'pon', tiles: ['白', '白', '白']}],
    });
    expect(tileCounts(hand).get('白')).toBe(4);
    expect(tileCounts(hand).get('東')).toBe(2);
    expect(tileCounts(hand).get('9s')).toBeUndefined();
  });

  it('赤ドラを通常牌と合算する', () => {
    const hand = parseHand(VALID);
    expect(tileCounts(hand).get('5p')).toBe(2);
  });
});

describe('formatMeld / formatMelds', () => {
  it('副露を日本語表記にする', () => {
    const hand = parseHand({
      hand: ['1m', '2m', '3m', '5p', '6p', '7p', '3s'],
      draw: '南',
      melds: [
        {type: 'pon', tiles: ['東', '東', '東']},
        {type: 'chi', tiles: ['赤5s', '4s', '3s']},
      ],
    });
    expect(hand.melds.map(formatMeld)).toEqual(['ポン:東東東', 'チー:3s4s赤5s']);
    expect(formatMelds(hand.melds)).toBe('ポン:東東東 チー:3s4s赤5s');
  });

  it('副露が無ければ「なし」を返す', () => {
    expect(formatMelds([])).toBe('なし');
  });

  it('カンを種別ごとに表記する', () => {
    const tiles = [parseTile('9s'), parseTile('9s'), parseTile('9s'), parseTile('9s')];
    expect(formatMeld({type: 'minkan', tiles})).toBe('明カン:9s9s9s9s');
    expect(formatMeld({type: 'ankan', tiles})).toBe('暗カン:9s9s9s9s');
    expect(formatMeld({type: 'kakan', tiles})).toBe('加カン:9s9s9s9s');
  });
});
