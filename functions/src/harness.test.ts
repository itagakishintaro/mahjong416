import {describe, expect, it} from 'vitest';

// ハーネスの動作確認用。ソルバーの最初のテストを書いたら削除してよい。
describe('test harness', () => {
  it('Vitestが動作する', () => {
    expect(1 + 1).toBe(2);
  });
});
