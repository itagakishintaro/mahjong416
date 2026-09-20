import {describe, expect, it} from 'vitest';
import {formatTile} from './tile.js';
import {parseHand} from './hand.js';
import {tiles} from './testing.js';
import {ukeire} from './ukeire.js';

/** 受入の結果を '牌:枚数' の配列にする */
function summarize(result: ReturnType<typeof ukeire>) {
  return result.tiles.map(({tile, count}) => `${formatTile(tile)}:${count}`);
}

describe('ukeire: テンパイ時の待ち', () => {
  it('両面待ちは2種8枚', () => {
    const result = ukeire(tiles('123m456m789m34s東東'), []);
    expect(summarize(result)).toEqual(['2s:4', '5s:4']);
    expect(result.total).toBe(8);
  });

  it('辺張待ちは1種4枚', () => {
    const result = ukeire(tiles('123m456m789m12s東東'), []);
    expect(summarize(result)).toEqual(['3s:4']);
    expect(result.total).toBe(4);
  });

  it('嵌張待ちは1種4枚', () => {
    const result = ukeire(tiles('123m456m789m13s東東'), []);
    expect(summarize(result)).toEqual(['2s:4']);
    expect(result.total).toBe(4);
  });

  it('単騎待ちは手牌にある分を引く', () => {
    const result = ukeire(tiles('123m456m789m123s東'), []);
    expect(summarize(result)).toEqual(['東:3']);
    expect(result.total).toBe(3);
  });

  it('シャンポン待ちは2種4枚', () => {
    const result = ukeire(tiles('123m456m789m11s東東'), []);
    expect(summarize(result)).toEqual(['1s:2', '東:2']);
    expect(result.total).toBe(4);
  });
});

describe('ukeire: 1シャンテン', () => {
  it('テンパイに繋がる牌をすべて数える', () => {
    const result = ukeire(tiles('123m456m789m東東1p5s'), []);
    expect(summarize(result)).toEqual([
      '1p:3',
      '2p:4',
      '3p:4',
      '3s:4',
      '4s:4',
      '5s:3',
      '6s:4',
      '7s:4',
      '東:2',
    ]);
    expect(result.total).toBe(32);
  });
});

describe('ukeire: 残り枚数の算定', () => {
  it('自分の手牌に4枚ある牌は受入に含めない', () => {
    const result = ukeire(tiles('1111m234p567p東東9s'), []);
    expect(summarize(result)).not.toContain('1m:0');
    expect(result.tiles.map(({tile}) => formatTile(tile))).not.toContain('1m');
  });

  it('副露にある牌も見えている枚数として引く', () => {
    // 白は副露で3枚・手牌で1枚の計4枚が見えており、白単騎の受入は0枚になる
    const hand = parseHand({
      hand: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '白'],
      draw: '2p',
      melds: [{type: 'pon', tiles: ['白', '白', '白']}],
    });
    const result = ukeire(hand.tiles, hand.melds);
    expect(result.tiles).toEqual([]);
    expect(result.total).toBe(0);
  });

});

describe('ukeire: 副露あり', () => {
  it('副露を面子として数えたうえで待ちを求める', () => {
    const hand = parseHand({
      hand: ['1m', '2m', '3m', '4m', '5m', '6m', '1s', '2s', '東', '東'],
      draw: '9p',
      melds: [{type: 'pon', tiles: ['白', '白', '白']}],
    });
    const result = ukeire(hand.tiles, hand.melds);
    expect(summarize(result)).toEqual(['3s:4']);
  });
});

describe('ukeire: 和了形', () => {
  it('すでに和了していれば受入は無い', () => {
    const result = ukeire(tiles('123m456m789m123s東東'), []);
    expect(result.tiles).toEqual([]);
    expect(result.total).toBe(0);
  });
});

describe('ukeire: ブロック数の上限が効いているか', () => {
  it('すでに5ブロックある手では、浮き牌を増やす牌を受入に数えない', () => {
    const result = ukeire(tiles('33m455m66p345s667s'), []);
    expect(summarize(result)).toEqual([
      '4m:3',
      '6p:2',
      '2s:4',
      '5s:3',
      '6s:2',
      '8s:4',
    ]);
    expect(result.total).toBe(18);
  });
});
