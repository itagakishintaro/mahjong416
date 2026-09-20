import {describe, expect, it} from 'vitest';
import {countDora, doraValue} from './dora.js';
import {parseTile, parseTiles} from './tile.js';
import {parseHand} from './hand.js';
import {tiles} from './testing.js';

describe('doraValue', () => {
  const dora = parseTiles(['5s']);

  it('ドラと一致する牌は1枚分', () => {
    expect(doraValue(parseTile('5s'), dora)).toBe(1);
  });

  it('ドラでない牌は0枚分', () => {
    expect(doraValue(parseTile('1m'), dora)).toBe(0);
  });

  it('赤ドラは常に1枚分', () => {
    expect(doraValue(parseTile('赤5m'), dora)).toBe(1);
  });

  it('赤ドラがドラでもある場合は2枚分', () => {
    expect(doraValue(parseTile('赤5s'), dora)).toBe(2);
  });

  it('複数のドラを数える', () => {
    const multiple = parseTiles(['5s', '東']);
    expect(doraValue(parseTile('東'), multiple)).toBe(1);
  });
});

describe('countDora', () => {
  it('手牌のドラを合計する', () => {
    expect(countDora(tiles('5s5s1m'), parseTiles(['5s']))).toBe(2);
  });

  it('赤ドラを含めて合計する', () => {
    expect(countDora(parseTiles(['赤5m', '5s', '1m']), parseTiles(['5s']))).toBe(2);
  });

  it('ドラが無ければ0', () => {
    expect(countDora(tiles('123m'), parseTiles(['9p']))).toBe(0);
  });
});

describe('allTiles', () => {
  it('手牌・ツモ牌・副露をすべて含める', async () => {
    const {allTiles} = await import('./hand.js');
    const hand = parseHand({
      hand: ['1m', '2m', '3m', '4m', '5m', '6m', '1s', '2s', '東', '東'],
      draw: '5s',
      melds: [{type: 'pon', tiles: ['5s', '5s', '5s']}],
    });
    expect(allTiles(hand)).toHaveLength(14);
    expect(countDora(allTiles(hand), parseTiles(['5s']))).toBe(4);
  });
});
