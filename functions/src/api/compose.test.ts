import {describe, expect, it} from 'vitest';
import {composeResponse} from './compose.js';
import {type Candidate} from '../solver/candidates.js';
import {parseModelResponse} from '../prompt/parse.js';
import {parseTile} from '../solver/tile.js';

/** テスト用の打牌候補を組み立てる */
function candidate(
  discard: string,
  shanten: number,
  ukeireTotal: number,
): Candidate {
  return {
    discard: parseTile(discard),
    shanten,
    ukeire: ukeireTotal === 0 ? [] : [{tile: parseTile('3p'), count: ukeireTotal}],
    ukeireTotal,
  };
}

const CANDIDATES: Candidate[] = [
  candidate('9m', 1, 20),
  candidate('1m', 1, 18), // 20の90% → 次善手になる
  candidate('1p', 1, 17), // 20の85% → 次善手になる
  candidate('白', 1, 16), // 20の80% → 次善手にならない
  candidate('東', 2, 24), // シャンテン数が異なるため次善手にならない
];

function response(text: string, candidates: Candidate[] = CANDIDATES) {
  return composeResponse(candidates, parseModelResponse(text));
}

const MODEL = `【推奨打牌】9m
【シャンテン数】1シャンテン
【受入】20枚（3p:20）
【理由】
9mは孤立牌のため。

【避けるべき打牌】白
【避けるべき理由】
役牌のため。`;

describe('composeResponse: 推奨打牌', () => {
  it('モデルの推奨打牌をソルバーの計算値とともに返す', () => {
    const result = response(MODEL);
    expect(result.recommended.discard).toBe('9m');
    expect(result.recommended.shanten).toBe(1);
    expect(result.recommended.ukeire.total).toBe(20);
    expect(result.recommended.reason).toBe('9mは孤立牌のため。');
  });

  it('モデルが申告した数値ではなくソルバーの値を採用する', () => {
    const result = response(
      '【推奨打牌】9m\n【シャンテン数】0シャンテン\n【受入】99枚\n【理由】\n理由。',
    );
    expect(result.recommended.shanten).toBe(1);
    expect(result.recommended.ukeire.total).toBe(20);
    expect(result.warnings.join()).toContain('シャンテン数');
  });

  it('数値が一致していれば警告を出さない', () => {
    expect(response(MODEL).warnings).toEqual([]);
    expect(response(MODEL).numbersConsistent).toBe(true);
  });

  it('数値が食い違えば numbersConsistent が false になる', () => {
    const result = response('【推奨打牌】9m\n【シャンテン数】0シャンテン\n【理由】\n理由。');
    expect(result.numbersConsistent).toBe(false);
  });

  it('数値の申告が無ければ一致とみなす', () => {
    expect(response('【推奨打牌】9m\n【理由】\n理由。').numbersConsistent).toBe(true);
  });
});

describe('composeResponse: 手牌に無い牌を推奨した場合', () => {
  const invalid = '【推奨打牌】5s\n【理由】\n理由。';

  it('ソルバーの最良手にフォールバックする', () => {
    expect(response(invalid).recommended.discard).toBe('9m');
  });

  it('警告を残す', () => {
    expect(response(invalid).warnings.join()).toContain('5s');
  });

  it('フォールバック時の理由はモデルのものを保持する', () => {
    expect(response(invalid).recommended.reason).toBe('理由。');
  });
});

describe('composeResponse: 次善手', () => {
  it('同じシャンテン数で受入85%以上の候補を返す', () => {
    const result = response(MODEL);
    expect(result.alternatives.map(({discard}) => discard)).toEqual(['1m', '1p']);
  });

  it('受入の多い順に最大2件まで返す', () => {
    const result = response(MODEL, [
      candidate('9m', 1, 20),
      candidate('1m', 1, 19),
      candidate('1p', 1, 18),
      candidate('2p', 1, 18),
    ]);
    expect(result.alternatives).toHaveLength(2);
    expect(result.alternatives.map(({discard}) => discard)).toEqual(['1m', '1p']);
  });

  it('該当が無ければ空になる', () => {
    const result = response(MODEL, [candidate('9m', 1, 20), candidate('1m', 1, 10)]);
    expect(result.alternatives).toEqual([]);
  });

  it('推奨打牌との差分を定型コメントで添える', () => {
    const result = response(MODEL);
    expect(result.alternatives[0]!.note).toBe(
      '推奨打牌と同じ1シャンテンだが、受入が2枚少ない',
    );
  });

  it('受入が同じ場合はその旨を書く', () => {
    const result = response(MODEL, [candidate('9m', 1, 20), candidate('1m', 1, 20)]);
    expect(result.alternatives[0]!.note).toBe(
      '推奨打牌と同じ1シャンテンで、受入も同じ',
    );
  });
});

describe('composeResponse: ソルバーの計算結果', () => {
  it('全候補をそのまま返す', () => {
    const result = response(MODEL);
    expect(result.solver.candidates).toEqual([
      {discard: '9m', shanten: 1, ukeireTotal: 20},
      {discard: '1m', shanten: 1, ukeireTotal: 18},
      {discard: '1p', shanten: 1, ukeireTotal: 17},
      {discard: '白', shanten: 1, ukeireTotal: 16},
      {discard: '東', shanten: 2, ukeireTotal: 24},
    ]);
  });

  it('受入の内訳を牌と枚数の組で返す', () => {
    expect(response(MODEL).recommended.ukeire.tiles).toEqual([
      {tile: '3p', count: 20},
    ]);
  });
});
