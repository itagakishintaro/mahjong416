import {describe, expect, it} from 'vitest';

import {parseSituation} from '../situation.js';
import {
  buildAmateurSystemInstruction,
  buildAmateurUserPrompt,
} from './amateur.js';

const situation = parseSituation({
  round: '東1局',
  seat: '東家',
  turn: 7,
  dora: ['5s'],
  hand: ['1m','2m','3m','4m','5m','6m','7m','8m','9m','東','東','1p','2p'],
  draw: '5s',
  melds: [],
});

describe('buildAmateurSystemInstruction', () => {
  const instruction = buildAmateurSystemInstruction();

  it('出力は推奨打牌と理由だけにさせる', () => {
    expect(instruction).toContain('【推奨打牌】');
    expect(instruction).toContain('【理由】');
    expect(instruction).not.toContain('【シャンテン数】');
    expect(instruction).not.toContain('【受入】');
  });

  it('枚数など具体的な数字を書かせない', () => {
    expect(instruction).toMatch(/枚数|数字/);
  });

  it('候補の列挙を禁じる', () => {
    expect(instruction).toMatch(/列挙|候補を並べ/);
  });

  it('文字数の上限を示す', () => {
    expect(instruction).toMatch(/\d+文字/);
  });
});

describe('buildAmateurUserPrompt', () => {
  it('ソルバーの計算結果を渡さない', () => {
    const prompt = buildAmateurUserPrompt(situation);
    expect(prompt).toContain('【手牌】');
    expect(prompt).not.toContain('打牌候補');
    expect(prompt).not.toContain('シャンテン');
  });

  it('除外する牌を指定できる', () => {
    const prompt = buildAmateurUserPrompt(situation, {exclude: ['5s']});
    expect(prompt).toContain('5s');
    expect(prompt).toMatch(/選ばない|除/);
  });

  it('除外がなければその指示を書かない', () => {
    expect(buildAmateurUserPrompt(situation)).not.toMatch(/選ばない/);
  });
});
