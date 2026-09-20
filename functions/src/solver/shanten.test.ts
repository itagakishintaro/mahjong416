import {describe, expect, it} from 'vitest';
import {
  regularShanten,
  sevenPairsShanten,
  shanten,
  thirteenOrphansShanten,
} from './shanten.js';
import {tiles} from './testing.js';

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

describe('sevenPairsShanten', () => {
  it('7対子は -1', () => {
    expect(sevenPairsShanten(tiles('11m22m33p44p55s66s東東'))).toBe(-1);
  });

  it('6対子 + 浮き牌1枚は 0', () => {
    expect(sevenPairsShanten(tiles('11m22m33p44p55s66s東'))).toBe(0);
  });

  it('4対子は 2', () => {
    expect(sevenPairsShanten(tiles('11m22m33p44p5s東南西北'))).toBe(2);
  });

  it('同じ牌4枚は1対子としてしか数えない', () => {
    // 1m×4 2p×4 3s×4 東 → 対子3つ・種類4つ。種類不足の補正が入る
    expect(sevenPairsShanten(tiles('1111m2222p3333s東'))).toBe(6);
  });

  it('副露があれば成立しない', () => {
    expect(sevenPairsShanten(tiles('11m22m33p44p5s'), 1)).toBe(
      Number.POSITIVE_INFINITY,
    );
  });
});

describe('thirteenOrphansShanten', () => {
  it('13面待ちは 0', () => {
    expect(thirteenOrphansShanten(tiles('19m19p19s東南西北白発中'))).toBe(0);
  });

  it('雀頭のある和了形は -1', () => {
    expect(thirteenOrphansShanten(tiles('19m19p19s東南西北白発中中'))).toBe(-1);
  });

  it('単騎テンパイは 0', () => {
    expect(thirteenOrphansShanten(tiles('19m19p19s東南西北白発発'))).toBe(0);
  });

  it('面子手は大きな値になる', () => {
    expect(thirteenOrphansShanten(tiles('123m456m789m123s東東'))).toBe(8);
  });

  it('副露があれば成立しない', () => {
    expect(thirteenOrphansShanten(tiles('19m19p19s東南西北'), 1)).toBe(
      Number.POSITIVE_INFINITY,
    );
  });
});

describe('shanten: 3つの形の最小値', () => {
  it('対子が多い手は七対子として評価する', () => {
    const hand = tiles('11m22p33s東東南南西西北');
    expect(regularShanten(hand)).toBe(3);
    expect(shanten(hand)).toBe(0);
  });

  it('么九牌ばかりの手は国士として評価する', () => {
    const hand = tiles('19m19p19s東南西北白発中');
    expect(shanten(hand)).toBe(0);
  });

  it('面子手が最良ならその値を返す', () => {
    expect(shanten(tiles('123m456m789m12s東東'))).toBe(0);
  });

  it('副露があれば面子手としてのみ評価する', () => {
    expect(shanten(tiles('123m456m東東12p'), 1)).toBe(0);
  });
});

describe('regularShanten: ブロック数の上限（面子側）', () => {
  // 面子を取るときにブロック上限を見ていないと、6ブロック目を数えて
  // シャンテン数を実際より小さく見積もる
  const base = '33m455m66p345s667s';

  it('5ブロックを超えて数えない', () => {
    expect(regularShanten(tiles(base))).toBe(1);
  });

  it('ブロックが足りている手に浮き牌を足してもシャンテン数は減らない', () => {
    expect(regularShanten(tiles(`${base}1s`))).toBe(1);
    expect(regularShanten(tiles(`${base}4s`))).toBe(1);
  });

  it('面子を完成させる牌でだけシャンテン数が減る', () => {
    expect(regularShanten(tiles(`${base}4m`))).toBe(0);
  });
});
