import {describe, expect, it} from 'vitest';
import {buildSystemInstruction, buildUserPrompt, formatAnswer} from './build.js';
import {parseModelResponse} from './parse.js';
import {formatTile, parseTile} from '../solver/tile.js';
import {evaluateCandidates} from '../solver/candidates.js';
import {parseSituation, type SituationInput} from '../situation.js';

const INPUT: SituationInput = {
  round: '東1局',
  seat: '南家',
  turn: 7,
  dora: ['5s'],
  hand: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '東', '東', '1p', '2p'],
  draw: '5s',
  melds: [],
};

function prompt(input: SituationInput = INPUT) {
  const situation = parseSituation(input);
  return buildUserPrompt(situation, evaluateCandidates(situation.hand));
}

describe('buildUserPrompt: 局面', () => {
  it('局・自風・巡目・ドラを含む', () => {
    const text = prompt();
    expect(text).toContain('【局】東1局');
    expect(text).toContain('【自風】南家');
    expect(text).toContain('【巡目】7巡目');
    expect(text).toContain('【ドラ】5s');
  });

  it('手牌を正規順の連結表記で書く', () => {
    expect(prompt()).toContain('【手牌】1m2m3m4m5m6m7m8m9m1p2p東東');
  });

  it('ツモ牌を別の行に書く', () => {
    expect(prompt()).toContain('【ツモ】5s');
  });

  it('副露が無ければ「なし」と書く', () => {
    expect(prompt()).toContain('【副露】なし');
  });

  it('副露を日本語表記で書く', () => {
    const text = prompt({
      ...INPUT,
      hand: ['1m', '2m', '3m', '4m', '5m', '6m', '1s', '2s', '東', '東'],
      draw: '9p',
      melds: [{type: 'pon', tiles: ['白', '白', '白']}],
    });
    expect(text).toContain('【副露】ポン:白白白');
  });

  it('副露直後はツモ牌の行を書かない', () => {
    const text = prompt({
      ...INPUT,
      hand: ['1m', '2m', '3m', '4m', '5m', '6m', '1s', '2s', '東', '東', '9p'],
      draw: undefined,
      melds: [{type: 'pon', tiles: ['白', '白', '白']}],
    });
    expect(text).not.toContain('【ツモ】');
  });

  it('複数のドラを並べる', () => {
    expect(prompt({...INPUT, dora: ['5s', '東']})).toContain('【ドラ】5s 東');
  });
});

describe('buildUserPrompt: 打牌候補', () => {
  it('計算済みの打牌候補を列挙する', () => {
    const text = prompt();
    expect(text).toContain('【打牌候補（計算済み）】');
    expect(text).toContain('5s: 0シャンテン 受入4枚（3p:4）');
  });

  it('候補は最良手から順に並ぶ', () => {
    const lines = prompt().split('\n');
    const index = lines.findIndex((line) => line.startsWith('5s: 0シャンテン'));
    const next = lines[index + 1] ?? '';
    expect(index).toBeGreaterThan(0);
    expect(next).toMatch(/^(1p|2p|東|[1-9]m): 1シャンテン/);
  });

  it('受入が無い候補は枚数0として書く', () => {
    // 白は副露3枚 + 手牌1枚で見えており、白単騎の受入は0枚になる
    const text = prompt({
      ...INPUT,
      hand: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '白'],
      draw: '2p',
      melds: [{type: 'pon', tiles: ['白', '白', '白']}],
    });
    expect(text).toContain('2p: 0シャンテン 受入0枚');
  });
});

describe('buildSystemInstruction', () => {
  it('ルールの前提を明示する', () => {
    const text = buildSystemInstruction();
    expect(text).toContain('Mリーグルール');
    expect(text).toContain('半荘');
    expect(text).toContain('赤あり');
  });

  it('計算結果を信頼するよう指示する', () => {
    expect(buildSystemInstruction()).toContain('計算済み');
  });

  it('出力フォーマットを指定する', () => {
    const text = buildSystemInstruction();
    expect(text).toContain('【推奨打牌】');
    expect(text).toContain('【シャンテン数】');
    expect(text).toContain('【受入】');
    expect(text).toContain('【理由】');
  });

  it('次善手と避けるべき打牌は出力させない', () => {
    // 次善手はソルバーから機械的に付加し、避けるべき打牌は出力仕様から外した
    const text = buildSystemInstruction();
    expect(text).not.toContain('【次善手】');
    expect(text).not.toContain('【避けるべき打牌】');
  });
});

describe('formatAnswer', () => {
  const answer = {
    discard: parseTile('9m'),
    shanten: 1,
    ukeire: [
      {tile: parseTile('1m'), count: 3},
      {tile: parseTile('東'), count: 2},
    ],
    ukeireTotal: 5,
    reason: '9mは孤立牌のため。\n東は自風で価値がある。',
  };

  it('出力フォーマットどおりに整形する', () => {
    expect(formatAnswer(answer)).toBe(
      [
        '【推奨打牌】9m',
        '【シャンテン数】1シャンテン',
        '【受入】5枚（1m:3 東:2）',
        '【理由】',
        '9mは孤立牌のため。',
        '東は自風で価値がある。',
      ].join('\n'),
    );
  });

  it('パーサで読み戻せる', () => {
    const parsed = parseModelResponse(formatAnswer(answer));
    expect(formatTile(parsed.discard)).toBe('9m');
    expect(parsed.shanten).toBe(1);
    expect(parsed.ukeireTotal).toBe(5);
    expect(parsed.reason).toBe(answer.reason);
  });

  it('避けるべき打牌の節は書かない', () => {
    expect(formatAnswer(answer)).not.toContain('【避けるべき打牌】');
  });

  it('受入が無ければ内訳を書かない', () => {
    const text = formatAnswer({...answer, ukeire: [], ukeireTotal: 0});
    expect(text).toContain('【受入】0枚');
    expect(text).not.toContain('（）');
  });
});

describe('withSolver: false（ベースライン測定用）', () => {
  it('打牌候補を渡さない', () => {
    const situation = parseSituation(INPUT);
    const text = buildUserPrompt(situation, evaluateCandidates(situation.hand), {
      withSolver: false,
    });
    expect(text).toContain('【手牌】');
    expect(text).not.toContain('【打牌候補（計算済み）】');
  });

  it('システム指示から計算済みの前提を外す', () => {
    const text = buildSystemInstruction({withSolver: false});
    expect(text).not.toContain('計算済み');
    expect(text).toContain('自分で数えること');
    expect(text).toContain('【推奨打牌】');
  });
});
