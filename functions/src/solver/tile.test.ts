import {describe, expect, it} from 'vitest';
import {
  compareTiles,
  formatTile,
  formatTiles,
  parseTile,
  parseTiles,
  sortTiles,
  tileKey,
} from './tile.js';

describe('parseTile', () => {
  it('数牌をパースする', () => {
    expect(parseTile('1m')).toEqual({suit: 'm', rank: 1, red: false});
    expect(parseTile('5p')).toEqual({suit: 'p', rank: 5, red: false});
    expect(parseTile('9s')).toEqual({suit: 's', rank: 9, red: false});
  });

  it('風牌を z1〜z4 としてパースする', () => {
    expect(parseTile('東')).toEqual({suit: 'z', rank: 1, red: false});
    expect(parseTile('南')).toEqual({suit: 'z', rank: 2, red: false});
    expect(parseTile('西')).toEqual({suit: 'z', rank: 3, red: false});
    expect(parseTile('北')).toEqual({suit: 'z', rank: 4, red: false});
  });

  it('三元牌を z5〜z7 としてパースする', () => {
    expect(parseTile('白')).toEqual({suit: 'z', rank: 5, red: false});
    expect(parseTile('発')).toEqual({suit: 'z', rank: 6, red: false});
    expect(parseTile('中')).toEqual({suit: 'z', rank: 7, red: false});
  });

  it('赤ドラをパースする', () => {
    expect(parseTile('赤5m')).toEqual({suit: 'm', rank: 5, red: true});
    expect(parseTile('赤5p')).toEqual({suit: 'p', rank: 5, red: true});
    expect(parseTile('赤5s')).toEqual({suit: 's', rank: 5, red: true});
  });

  it('不正な表記を拒否する', () => {
    for (const s of ['', ' ', '0m', '10m', '5', 'm', '5x', '東m', '1z']) {
      expect(() => parseTile(s), s).toThrow();
    }
  });

  it('赤は数牌の5のみ許容する', () => {
    for (const s of ['赤4m', '赤6p', '赤5', '赤東', '赤白', '赤5z']) {
      expect(() => parseTile(s), s).toThrow();
    }
  });

  it('前後の空白を許容する', () => {
    expect(parseTile(' 1m ')).toEqual({suit: 'm', rank: 1, red: false});
  });
});

describe('formatTile', () => {
  it('パースした表記に復元できる', () => {
    for (const s of ['1m', '5p', '9s', '東', '北', '白', '中', '赤5m', '赤5s']) {
      expect(formatTile(parseTile(s))).toBe(s);
    }
  });
});

describe('parseTiles / formatTiles', () => {
  it('配列をまとめてパースする', () => {
    expect(parseTiles(['1m', '東'])).toEqual([
      {suit: 'm', rank: 1, red: false},
      {suit: 'z', rank: 1, red: false},
    ]);
  });

  it('空配列を許容する', () => {
    expect(parseTiles([])).toEqual([]);
  });

  it('1つでも不正な牌があれば失敗する', () => {
    expect(() => parseTiles(['1m', '0p'])).toThrow();
  });

  it('配列を表記へ戻す', () => {
    expect(formatTiles(parseTiles(['1m', '赤5p', '中']))).toEqual([
      '1m',
      '赤5p',
      '中',
    ]);
  });
});

describe('tileKey', () => {
  it('赤ドラを通常牌と同じキーにする', () => {
    expect(tileKey(parseTile('赤5m'))).toBe('5m');
    expect(tileKey(parseTile('5m'))).toBe('5m');
  });

  it('字牌のキーを返す', () => {
    expect(tileKey(parseTile('東'))).toBe('東');
  });
});

describe('sortTiles', () => {
  it('萬子→筒子→索子→風牌→三元牌の順に並べる', () => {
    const input = ['中', '1s', '東', '9p', '白', '1m', '北', '5s', '2m'];
    expect(formatTiles(sortTiles(parseTiles(input)))).toEqual([
      '1m',
      '2m',
      '9p',
      '1s',
      '5s',
      '東',
      '北',
      '白',
      '中',
    ]);
  });

  it('同じ牌では赤ドラを後ろに置く', () => {
    expect(formatTiles(sortTiles(parseTiles(['赤5m', '5m'])))).toEqual([
      '5m',
      '赤5m',
    ]);
  });

  it('元の配列を破壊しない', () => {
    const tiles = parseTiles(['9m', '1m']);
    sortTiles(tiles);
    expect(formatTiles(tiles)).toEqual(['9m', '1m']);
  });
});

describe('compareTiles', () => {
  it('同一の牌では0を返す', () => {
    expect(compareTiles(parseTile('3p'), parseTile('3p'))).toBe(0);
  });

  it('数牌は字牌より前に並ぶ', () => {
    expect(compareTiles(parseTile('9s'), parseTile('東'))).toBeLessThan(0);
  });
});
