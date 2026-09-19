import {describe, expect, it} from 'vitest';
import {
  JsonFieldError,
  optionalString,
  requireArray,
  requireBoolean,
  requireEnum,
  requireNumber,
  requireObject,
  requireString,
  requireStringArray,
} from './json.js';

describe('requireObject', () => {
  it('オブジェクトを通す', () => {
    expect(requireObject({a: 1}, 'x')).toEqual({a: 1});
  });

  it('オブジェクト以外を拒否する', () => {
    for (const value of [null, undefined, [], 'text', 1]) {
      expect(() => requireObject(value, 'x'), String(value)).toThrow(JsonFieldError);
    }
  });
});

describe('requireString / optionalString', () => {
  it('文字列を通す', () => {
    expect(requireString('a', 'x')).toBe('a');
  });

  it('文字列以外を拒否する', () => {
    expect(() => requireString(1, 'x')).toThrow(JsonFieldError);
  });

  it('省略と null を undefined として扱う', () => {
    expect(optionalString(undefined, 'x')).toBeUndefined();
    expect(optionalString(null, 'x')).toBeUndefined();
  });
});

describe('requireNumber / requireBoolean', () => {
  it('数値・真偽値を通す', () => {
    expect(requireNumber(1, 'x')).toBe(1);
    expect(requireBoolean(true, 'x')).toBe(true);
  });

  it('型が違えば拒否する', () => {
    expect(() => requireNumber('1', 'x')).toThrow(JsonFieldError);
    expect(() => requireBoolean('true', 'x')).toThrow(JsonFieldError);
  });
});

describe('requireArray / requireStringArray', () => {
  it('配列を通す', () => {
    expect(requireArray([1], 'x')).toEqual([1]);
    expect(requireStringArray(['a'], 'x')).toEqual(['a']);
  });

  it('配列でなければ拒否する', () => {
    expect(() => requireArray('a', 'x')).toThrow(JsonFieldError);
  });

  it('要素の型が違えば位置を示して拒否する', () => {
    expect(() => requireStringArray(['a', 1], 'x')).toThrow(/x\[1\]/);
  });
});

describe('requireEnum', () => {
  it('候補に含まれる値を通す', () => {
    expect(requireEnum('a', ['a', 'b'], 'x')).toBe('a');
  });

  it('候補に無い値を拒否する', () => {
    expect(() => requireEnum('c', ['a', 'b'], 'x')).toThrow(JsonFieldError);
  });
});

describe('エラーメッセージ', () => {
  it('フィールド名を含む', () => {
    expect(() => requireString(1, 'melds[0].type')).toThrow(/melds\[0\]\.type/);
  });
});
