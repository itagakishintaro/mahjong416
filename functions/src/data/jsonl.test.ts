import {describe, expect, it} from 'vitest';
import {buildPreferenceExamples, toJsonl} from './jsonl.js';
import {parseProblem} from './problem.js';
import {buildSystemInstruction} from '../prompt/build.js';

const RAW = {
  id: '0001',
  situation: {
    round: '東1局',
    seat: '南家',
    turn: 7,
    dora: ['5s'],
    hand: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '東', '東', '1p', '2p'],
    draw: '5s',
    melds: [],
  },
  answer: {discard: '5s', reason: '5sは孤立牌で、切ってもテンパイが崩れない。'},
  rejected: [
    {discard: '東', reason: '自風は重なれば役になるので先に払う必要はない。'},
    {discard: '1p', reason: '端の牌から整理するのが基本。'},
  ],
  meta: {split: 'train', createdAt: '2026-09-19', reviewed: true},
};

const PROBLEM = parseProblem(RAW);

describe('buildPreferenceExamples', () => {
  it('悪手の数だけペアを作る', () => {
    expect(buildPreferenceExamples(PROBLEM)).toHaveLength(2);
  });

  it('システム指示は推論時と同じものを使う', () => {
    const [example] = buildPreferenceExamples(PROBLEM);
    expect(example!.system_instruction.parts[0]!.text).toBe(buildSystemInstruction());
  });

  it('contents はユーザーのターンで終わる', () => {
    const [example] = buildPreferenceExamples(PROBLEM);
    expect(example!.contents).toHaveLength(1);
    expect(example!.contents[0]!.role).toBe('user');
    expect(example!.contents[0]!.parts[0]!.text).toContain('【打牌候補（計算済み）】');
  });

  it('preferred に score 1、dispreferred に score 0 を付ける', () => {
    const [example] = buildPreferenceExamples(PROBLEM);
    expect(example!.completions.map(({score}) => score)).toEqual([1, 0]);
    expect(example!.completions.every(({completion}) => completion.role === 'model')).toBe(true);
  });

  it('preferred は正解の打牌と理由を書く', () => {
    const text = buildPreferenceExamples(PROBLEM)[0]!.completions[0]!.completion.parts[0]!.text;
    expect(text).toContain('【推奨打牌】5s');
    expect(text).toContain('5sは孤立牌で、切ってもテンパイが崩れない。');
  });

  it('dispreferred は悪手の打牌と、その打牌を選ぶ誤った理由を書く', () => {
    const text = buildPreferenceExamples(PROBLEM)[0]!.completions[1]!.completion.parts[0]!.text;
    expect(text).toContain('【推奨打牌】東');
    expect(text).toContain('自風は重なれば役になるので先に払う必要はない。');
  });

  it('dispreferred の数値はその打牌に対するソルバーの計算値にする', () => {
    const [example] = buildPreferenceExamples(PROBLEM);
    const preferred = example!.completions[0]!.completion.parts[0]!.text;
    const dispreferred = example!.completions[1]!.completion.parts[0]!.text;
    expect(preferred).toContain('【シャンテン数】0シャンテン');
    expect(dispreferred).toContain('【シャンテン数】1シャンテン');
  });

  it('悪手ごとに異なるペアになる', () => {
    const [first, second] = buildPreferenceExamples(PROBLEM);
    expect(first!.completions[1]!.completion.parts[0]!.text).toContain('【推奨打牌】東');
    expect(second!.completions[1]!.completion.parts[0]!.text).toContain('【推奨打牌】1p');
  });

  it('同じ局面ならプロンプトは共通になる', () => {
    const [first, second] = buildPreferenceExamples(PROBLEM);
    expect(first!.contents[0]!.parts[0]!.text).toBe(second!.contents[0]!.parts[0]!.text);
  });

  it('悪手が無ければ失敗する', () => {
    const problem = parseProblem({...RAW, rejected: []});
    expect(() => buildPreferenceExamples(problem)).toThrow(/0001/);
  });
});

describe('toJsonl', () => {
  it('1行1件のJSONにする', () => {
    const lines = toJsonl(buildPreferenceExamples(PROBLEM)).trimEnd().split('\n');
    expect(lines).toHaveLength(2);
    for (const line of lines) {
      expect(() => JSON.parse(line)).not.toThrow();
    }
  });

  it('末尾を改行で終える', () => {
    expect(toJsonl(buildPreferenceExamples(PROBLEM)).endsWith('\n')).toBe(true);
  });

  it('改行を含むテキストが1行に収まる', () => {
    const lines = toJsonl(buildPreferenceExamples(PROBLEM)).trimEnd().split('\n');
    const parsed = JSON.parse(lines[0]!);
    expect(parsed.completions[0].completion.parts[0].text).toContain('\n');
  });

  it('空なら空文字を返す', () => {
    expect(toJsonl([])).toBe('');
  });
});
