import {describe, expect, it} from 'vitest';

import {selectTestIds} from './split.js';

const ids = Array.from({length: 30}, (_, i) => String(i + 1).padStart(4, '0'));

describe('selectTestIds', () => {
  it('同じシードなら何度呼んでも同じ結果になる', () => {
    expect(selectTestIds(ids, 8, 'nanikiru-v1')).toEqual(
      selectTestIds(ids, 8, 'nanikiru-v1'),
    );
  });

  it('指定した件数だけ重複なく選ぶ', () => {
    const picked = selectTestIds(ids, 8, 'nanikiru-v1');
    expect(picked).toHaveLength(8);
    expect(new Set(picked).size).toBe(8);
    for (const id of picked) expect(ids).toContain(id);
  });

  it('シードが違えば選ばれ方が変わる', () => {
    expect(selectTestIds(ids, 8, 'a')).not.toEqual(selectTestIds(ids, 8, 'b'));
  });

  it('IDの並び順に依存しない', () => {
    const shuffled = [...ids].reverse();
    expect(selectTestIds(shuffled, 8, 'nanikiru-v1')).toEqual(
      selectTestIds(ids, 8, 'nanikiru-v1'),
    );
  });

  it('選んだIDは昇順で返る', () => {
    const picked = selectTestIds(ids, 8, 'nanikiru-v1');
    expect([...picked].sort()).toEqual(picked);
  });

  it('母数より多く要求されたら拒否する', () => {
    expect(() => selectTestIds(ids, 31, 'x')).toThrow();
  });
});
