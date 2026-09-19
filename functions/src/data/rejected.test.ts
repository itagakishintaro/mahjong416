import {describe, expect, it} from 'vitest';
import {extractRejected} from './rejected.js';
import {type Candidate} from '../solver/candidates.js';
import {formatTile, parseTile, parseTiles} from '../solver/tile.js';

function candidate(discard: string, shanten: number, ukeireTotal: number): Candidate {
  return {discard: parseTile(discard), shanten, ukeire: [], ukeireTotal};
}

function discards(rejected: ReturnType<typeof extractRejected>) {
  return rejected.map(({candidate: c}) => formatTile(c.discard));
}

const DORA = parseTiles(['5s']);

describe('extractRejected: シャンテン戻し', () => {
  it('正解よりシャンテン数が大きい打牌を悪手にする', () => {
    const rejected = extractRejected({
      candidates: [candidate('9m', 1, 20), candidate('3m', 2, 30)],
      answer: parseTile('9m'),
      dora: DORA,
    });
    expect(discards(rejected)).toEqual(['3m']);
    expect(rejected[0]!.kind).toBe('shanten-back');
  });
});

describe('extractRejected: 受入大幅減', () => {
  it('同じシャンテン数で受入が60%未満の打牌を悪手にする', () => {
    const rejected = extractRejected({
      candidates: [candidate('9m', 1, 20), candidate('1p', 1, 11)],
      answer: parseTile('9m'),
      dora: DORA,
    });
    expect(discards(rejected)).toEqual(['1p']);
    expect(rejected[0]!.kind).toBe('ukeire-loss');
  });

  it('受入が60%以上あれば悪手にしない', () => {
    const rejected = extractRejected({
      candidates: [candidate('9m', 1, 20), candidate('1p', 1, 12)],
      answer: parseTile('9m'),
      dora: DORA,
    });
    expect(discards(rejected)).toEqual([]);
  });
});

describe('extractRejected: 打点放棄', () => {
  it('赤ドラを切って受入も増えない打牌を悪手にする', () => {
    const rejected = extractRejected({
      candidates: [candidate('9m', 1, 20), candidate('赤5m', 1, 19)],
      answer: parseTile('9m'),
      dora: DORA,
    });
    expect(discards(rejected)).toEqual(['赤5m']);
    expect(rejected[0]!.kind).toBe('value-loss');
  });

  it('ドラを切って受入も増えない打牌を悪手にする', () => {
    const rejected = extractRejected({
      candidates: [candidate('9m', 1, 20), candidate('5s', 1, 19)],
      answer: parseTile('9m'),
      dora: DORA,
    });
    expect(discards(rejected)).toEqual(['5s']);
  });

  it('ドラ切りでも受入が増えるなら悪手にしない', () => {
    const rejected = extractRejected({
      candidates: [candidate('9m', 1, 20), candidate('5s', 1, 25)],
      answer: parseTile('9m'),
      dora: DORA,
    });
    expect(discards(rejected)).toEqual([]);
  });
});

describe('extractRejected: 字牌の誤処理', () => {
  it('正解が字牌残しなら、その字牌を切る打牌を悪手にする', () => {
    const rejected = extractRejected({
      candidates: [candidate('9m', 1, 20), candidate('東', 1, 15)],
      answer: parseTile('9m'),
      dora: DORA,
    });
    expect(discards(rejected)).toEqual(['東']);
    expect(rejected[0]!.kind).toBe('honor-misuse');
  });

  it('正解自体が字牌切りなら対象にしない', () => {
    const rejected = extractRejected({
      candidates: [candidate('東', 1, 20), candidate('南', 1, 19)],
      answer: parseTile('東'),
      dora: DORA,
    });
    expect(discards(rejected)).toEqual([]);
  });
});

describe('extractRejected: 正解とほぼ同等の打牌は除外する', () => {
  it('同じシャンテン数で受入90%以上なら悪手にしない', () => {
    const rejected = extractRejected({
      candidates: [candidate('9m', 1, 20), candidate('東', 1, 19)],
      answer: parseTile('9m'),
      dora: DORA,
      // 東は honor-misuse に該当するが、受入が正解の95%あるため除外される
    });
    expect(discards(rejected)).toEqual([]);
  });
});

describe('extractRejected: 件数と並び', () => {
  it('正解自身は含めない', () => {
    const rejected = extractRejected({
      candidates: [candidate('9m', 1, 20)],
      answer: parseTile('9m'),
      dora: DORA,
    });
    expect(rejected).toEqual([]);
  });

  it('既定では最大3件まで返す', () => {
    const rejected = extractRejected({
      candidates: [
        candidate('9m', 1, 20),
        candidate('1m', 2, 30),
        candidate('2m', 2, 28),
        candidate('3m', 3, 26),
        candidate('4m', 3, 24),
      ],
      answer: parseTile('9m'),
      dora: DORA,
    });
    expect(rejected).toHaveLength(3);
  });

  it('件数の上限を指定できる', () => {
    const rejected = extractRejected({
      candidates: [candidate('9m', 1, 20), candidate('1m', 2, 30), candidate('2m', 3, 28)],
      answer: parseTile('9m'),
      dora: DORA,
      max: 1,
    });
    expect(rejected).toHaveLength(1);
  });

  it('シャンテン戻しを受入大幅減より優先する', () => {
    const rejected = extractRejected({
      candidates: [
        candidate('9m', 1, 20),
        candidate('1p', 1, 5),
        candidate('1m', 2, 30),
      ],
      answer: parseTile('9m'),
      dora: DORA,
      max: 1,
    });
    expect(discards(rejected)).toEqual(['1m']);
  });

  it('正解が見つからなければ失敗する', () => {
    expect(() =>
      extractRejected({
        candidates: [candidate('9m', 1, 20)],
        answer: parseTile('1s'),
        dora: DORA,
      }),
    ).toThrow();
  });
});
