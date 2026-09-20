import {describe, expect, it} from 'vitest';
import {formatTile} from '../solver/tile.js';
import {parseModelResponse, ResponseParseError} from './parse.js';

const FULL = `【推奨打牌】9m
【シャンテン数】1シャンテン
【受入】20枚（1m:3 4m:3 7p:4 3s:2 東:2 白:3）
【理由】
9mは孤立牌であり、ここを払っても受け入れは狭まらない。
東は自風であり、鳴ければ高打点につながる。

【避けるべき打牌】白
【避けるべき理由】
白は3枚見えておらず、重なれば役牌として使える。`;

describe('parseModelResponse', () => {
  it('推奨打牌を取り出す', () => {
    expect(formatTile(parseModelResponse(FULL).discard)).toBe('9m');
  });

  it('シャンテン数と受入枚数を取り出す', () => {
    const parsed = parseModelResponse(FULL);
    expect(parsed.shanten).toBe(1);
    expect(parsed.ukeireTotal).toBe(20);
  });

  it('理由を複数行のまま保持する', () => {
    expect(parseModelResponse(FULL).reason).toBe(
      '9mは孤立牌であり、ここを払っても受け入れは狭まらない。\n東は自風であり、鳴ければ高打点につながる。',
    );
  });

  it('仕様外の節（避けるべき打牌など）は無視する', () => {
    // 出力仕様からは外れたが、モデルが書いてきても壊れないこと
    const parsed = parseModelResponse(FULL);
    expect(formatTile(parsed.discard)).toBe('9m');
    expect(parsed.reason).not.toContain('役牌として使える');
  });
});

describe('parseModelResponse: 揺らぎへの耐性', () => {
  it('最小の応答を解釈できる', () => {
    const parsed = parseModelResponse('【推奨打牌】1m\n【理由】\n浮いているため。');
    expect(formatTile(parsed.discard)).toBe('1m');
    expect(parsed.reason).toBe('浮いているため。');
  });

  it('知らない見出しがあっても推奨打牌を読み取れる', () => {
    const parsed = parseModelResponse(
      ['【推奨打牌】1m', '【補足】', 'なにか。', '【理由】', '浮いているため。'].join('\n'),
    );
    expect(formatTile(parsed.discard)).toBe('1m');
    expect(parsed.reason).toBe('浮いているため。');
  });

  it('赤ドラを推奨打牌にできる', () => {
    expect(formatTile(parseModelResponse('【推奨打牌】赤5m\n【理由】\n打点より速度。').discard)).toBe('赤5m');
  });

  it('和了形のシャンテン数 -1 を解釈できる', () => {
    const parsed = parseModelResponse('【推奨打牌】1m\n【シャンテン数】-1シャンテン\n【理由】\n和了。');
    expect(parsed.shanten).toBe(-1);
  });

  it('受入の内訳が無くても枚数を取り出せる', () => {
    const parsed = parseModelResponse('【推奨打牌】1m\n【受入】0枚\n【理由】\n待ち無し。');
    expect(parsed.ukeireTotal).toBe(0);
  });

  it('シャンテン数と受入が無くても解釈できる', () => {
    const parsed = parseModelResponse('【推奨打牌】1m\n【理由】\n浮いているため。');
    expect(parsed.shanten).toBeUndefined();
    expect(parsed.ukeireTotal).toBeUndefined();
  });

  it('前後の空行や余分な空白を無視する', () => {
    const parsed = parseModelResponse('\n\n 【推奨打牌】 1m \n【理由】\n  浮いているため。  \n\n');
    expect(formatTile(parsed.discard)).toBe('1m');
    expect(parsed.reason).toBe('浮いているため。');
  });
});

describe('parseModelResponse: 失敗', () => {
  it('推奨打牌が無ければ失敗する', () => {
    expect(() => parseModelResponse('【理由】\n浮いているため。')).toThrow(ResponseParseError);
  });

  it('推奨打牌が牌として不正なら失敗する', () => {
    expect(() => parseModelResponse('【推奨打牌】0m\n【理由】\nなし。')).toThrow(ResponseParseError);
  });

  it('空の応答は失敗する', () => {
    expect(() => parseModelResponse('')).toThrow(ResponseParseError);
  });
});
