import {describe, expect, it} from 'vitest';
import {evaluateCandidates} from './candidates.js';
import {parseHand, type HandInput} from './hand.js';
import {formatTile} from './tile.js';

function candidates(input: HandInput) {
  return evaluateCandidates(parseHand(input));
}

describe('evaluateCandidates', () => {
  const oneShanten: HandInput = {
    // 123m456m789m 東東 12p 5s → 5sを切ればテンパイ
    hand: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '東', '東', '1p', '2p'],
    draw: '5s',
    melds: [],
  };

  it('最良の打牌が先頭に来る', () => {
    const result = candidates(oneShanten);
    expect(formatTile(result[0]!.discard)).toBe('5s');
    expect(result[0]!.shanten).toBe(0);
    expect(result[0]!.ukeireTotal).toBe(4);
  });

  it('打牌後の受入の内訳を返す', () => {
    const result = candidates(oneShanten);
    expect(result[0]!.ukeire.map(({tile, count}) => `${formatTile(tile)}:${count}`)).toEqual(['3p:4']);
  });

  it('手牌にあるすべての牌を候補にする', () => {
    const result = candidates(oneShanten);
    expect(result.map(({discard}) => formatTile(discard)).sort()).toEqual(
      ['1m', '1p', '2m', '2p', '3m', '4m', '5m', '5s', '6m', '7m', '8m', '9m', '東'].sort(),
    );
  });

  it('同じ牌を2枚持っていても候補は1つにまとめる', () => {
    const result = candidates(oneShanten);
    expect(result.filter(({discard}) => formatTile(discard) === '東')).toHaveLength(1);
  });

  it('シャンテン数の昇順、次に受入枚数の降順で並ぶ', () => {
    const result = candidates(oneShanten);
    for (let i = 1; i < result.length; i++) {
      const previous = result[i - 1]!;
      const current = result[i]!;
      expect(previous.shanten).toBeLessThanOrEqual(current.shanten);
      if (previous.shanten === current.shanten) {
        expect(previous.ukeireTotal).toBeGreaterThanOrEqual(current.ukeireTotal);
      }
    }
  });
});

describe('evaluateCandidates: 赤ドラ', () => {
  it('赤5mと5mを別の候補として扱う', () => {
    const result = candidates({
      hand: ['1m', '2m', '3m', '5m', '赤5m', '7m', '8m', '9m', '東', '東', '1p', '2p', '3p'],
      draw: '5s',
      melds: [],
    });
    const discards = result.map(({discard}) => formatTile(discard));
    expect(discards).toContain('5m');
    expect(discards).toContain('赤5m');
  });
});

describe('evaluateCandidates: 副露あり', () => {
  it('副露は打牌候補に含めない', () => {
    const result = candidates({
      hand: ['1m', '2m', '3m', '4m', '5m', '6m', '1s', '2s', '東', '東'],
      draw: '9p',
      melds: [{type: 'pon', tiles: ['白', '白', '白']}],
    });
    expect(result.map(({discard}) => formatTile(discard))).not.toContain('白');
    expect(formatTile(result[0]!.discard)).toBe('9p');
    expect(result[0]!.shanten).toBe(0);
  });

  it('副露4つでは手牌とツモ牌の2枚だけが候補になる', () => {
    const result = candidates({
      hand: ['東'],
      draw: '南',
      melds: [
        {type: 'pon', tiles: ['白', '白', '白']},
        {type: 'ankan', tiles: ['9s', '9s', '9s', '9s']},
        {type: 'chi', tiles: ['1m', '2m', '3m']},
        {type: 'minkan', tiles: ['発', '発', '発', '発']},
      ],
    });
    expect(result.map(({discard}) => formatTile(discard))).toEqual(['東', '南']);
  });
});

describe('evaluateCandidates: 和了形', () => {
  it('和了していても打牌候補は評価できる', () => {
    const result = candidates({
      hand: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '1s', '2s', '東', '東'],
      draw: '3s',
      melds: [],
    });
    expect(result[0]!.shanten).toBe(0);
  });
});
