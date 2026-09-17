import {describe, expect, it} from 'vitest';
import {parseTiles} from './tile.js';
import {regularShanten} from './shanten.js';

/**
 * '123m456p東東' のような麻雀の略記をパースする（テスト専用）。
 * 赤ドラは '赤5m' のように単独で書く。
 */
function tiles(notation: string) {
  const tokens = notation.match(/赤[1-9][mps]|[1-9]+[mps]|[東南西北白発中]/g) ?? [];
  const expanded = tokens.flatMap((token) => {
    if (token.startsWith('赤') || /^[東南西北白発中]$/.test(token)) {
      return [token];
    }
    const suit = token.slice(-1);
    return [...token.slice(0, -1)].map((rank) => `${rank}${suit}`);
  });
  return parseTiles(expanded);
}

describe('regularShanten: 和了形', () => {
  it('4面子1雀頭は -1', () => {
    expect(regularShanten(tiles('123m456m789m123s東東'))).toBe(-1);
  });

  it('副露4つ + 雀頭は -1', () => {
    expect(regularShanten(tiles('東東'), 4)).toBe(-1);
  });

  it('暗刻を含む和了形は -1', () => {
    expect(regularShanten(tiles('111m456m789m123s東東'))).toBe(-1);
  });
});

describe('regularShanten: テンパイ', () => {
  it('両面待ちは 0', () => {
    expect(regularShanten(tiles('123m456m789m12s東東'))).toBe(0);
  });

  it('シャンポン待ちは 0', () => {
    expect(regularShanten(tiles('123m456m789m11s東東'))).toBe(0);
  });

  it('単騎待ちは 0', () => {
    expect(regularShanten(tiles('123m456m789m123s東'))).toBe(0);
  });

  it('嵌張待ちは 0', () => {
    expect(regularShanten(tiles('123m456m789m13s東東'))).toBe(0);
  });

  it('副露1つのテンパイは 0', () => {
    expect(regularShanten(tiles('123m456m東東12p'), 1)).toBe(0);
  });

  it('副露4つの単騎テンパイは 0', () => {
    expect(regularShanten(tiles('東'), 4)).toBe(0);
  });
});

describe('regularShanten: 1シャンテン以上', () => {
  it('3面子1雀頭 + 浮き牌2枚は 1', () => {
    expect(regularShanten(tiles('123m456m789m東東1p5s'))).toBe(1);
  });

  it('2面子1雀頭 + 搭子2つは 1', () => {
    expect(regularShanten(tiles('123m456m東東12p45s9s'))).toBe(1);
  });

  it('2面子1雀頭 + 搭子1つ + 浮き牌は 2', () => {
    expect(regularShanten(tiles('123m456m東東12p5s9s南'))).toBe(2);
  });
});

describe('regularShanten: 雀頭がない場合の補正', () => {
  it('3面子 + 搭子2つで雀頭が無ければ 1（0にはならない）', () => {
    expect(regularShanten(tiles('123m456m789m12p45s'))).toBe(1);
  });
});

describe('regularShanten: ブロック数の上限', () => {
  it('対子が6つあっても面子手としては5ブロックまでしか数えない', () => {
    expect(regularShanten(tiles('11m22p33s東東南南西西北'))).toBe(3);
  });
});

describe('regularShanten: 副露の扱い', () => {
  it('副露は確定した面子として数える', () => {
    // 同じ形でも副露数が増えるほどシャンテン数は小さくなる
    const withoutMeld = regularShanten(tiles('123m456m789m東東1p5s'));
    const withMeld = regularShanten(tiles('123m456m東東1p5s'), 1);
    expect(withMeld).toBe(withoutMeld);
  });
});
