import {describe, expect, it} from 'vitest';
import {autoRejected} from './auto-rejected.js';
import {type Candidate} from '../solver/candidates.js';
import {formatTile, parseTile} from '../solver/tile.js';

function candidate(discard: string, shanten: number, ukeireTotal: number): Candidate {
  return {discard: parseTile(discard), shanten, ukeire: [], ukeireTotal};
}

describe('autoRejected: どの打牌を悪手にするか', () => {
  it('ソルバーの最良手を悪手にする', () => {
    const result = autoRejected(parseTile('2s'), [
      candidate('1s', 1, 18),
      candidate('2s', 1, 18),
    ]);
    expect(formatTile(result!.discard)).toBe('1s');
  });

  it('最良手が正解と一致する場合は次の候補を悪手にする', () => {
    const result = autoRejected(parseTile('1s'), [
      candidate('1s', 1, 18),
      candidate('2s', 1, 16),
    ]);
    expect(formatTile(result!.discard)).toBe('2s');
  });

  it('候補が正解しか無ければ作れない', () => {
    expect(autoRejected(parseTile('1s'), [candidate('1s', 1, 18)])).toBeUndefined();
  });

  it('候補が空なら作れない', () => {
    expect(autoRejected(parseTile('1s'), [])).toBeUndefined();
  });

  it('正解が候補に無ければ失敗する', () => {
    expect(() => autoRejected(parseTile('9p'), [candidate('1s', 1, 18)])).toThrow();
  });
});

describe('autoRejected: 理由文', () => {
  it('受入が同じ場合は牌効率に差が無いことを根拠にする', () => {
    const result = autoRejected(parseTile('2s'), [
      candidate('1s', 1, 18),
      candidate('2s', 1, 18),
    ]);
    expect(result!.reason).toContain('18枚');
    expect(result!.reason).toContain('同じ');
  });

  it('受入が広い場合は広さを根拠にする', () => {
    const result = autoRejected(parseTile('9m'), [
      candidate('1p', 1, 30),
      candidate('9m', 1, 20),
    ]);
    expect(result!.reason).toContain('30枚');
    expect(result!.reason).toContain('広');
  });

  it('シャンテン数が進む場合は手の進みを根拠にする', () => {
    const result = autoRejected(parseTile('9m'), [
      candidate('1p', 0, 4),
      candidate('9m', 1, 30),
    ]);
    expect(result!.reason).toContain('0シャンテン');
    expect(result!.reason).toContain('進');
  });

  it('正解より劣る候補しか無い場合も理由を作る', () => {
    const result = autoRejected(parseTile('1s'), [
      candidate('1s', 1, 18),
      candidate('2s', 1, 16),
    ]);
    expect(result!.reason).not.toBe('');
  });

  it('理由文に正解の打牌を書かない', () => {
    // 悪手側の出力に正解が現れると、対比が崩れる
    const result = autoRejected(parseTile('2s'), [
      candidate('1s', 1, 18),
      candidate('2s', 1, 18),
    ]);
    expect(result!.reason).not.toContain('2s');
  });
});
