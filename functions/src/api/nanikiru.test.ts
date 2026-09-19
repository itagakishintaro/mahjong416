import {describe, expect, it, vi} from 'vitest';
import {runNanikiru, type ModelClient} from './nanikiru.js';
import {InvalidSituationError} from '../situation.js';
import {InvalidHandError} from '../solver/hand.js';

const REQUEST = {
  round: '東1局',
  seat: '南家',
  turn: 7,
  dora: ['5s'],
  hand: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '東', '東', '1p', '2p'],
  draw: '5s',
  melds: [],
};

/** 固定の応答を返すモデル */
function stub(...responses: string[]): ModelClient {
  const queue = [...responses];
  return {
    generate: vi.fn(async () => {
      const next = queue.shift();
      if (next === undefined) {
        throw new Error('想定外の呼び出し');
      }
      return next;
    }),
  };
}

const VALID_RESPONSE = '【推奨打牌】5s\n【理由】\n5sは孤立牌のため。';

describe('runNanikiru', () => {
  it('モデルの応答からレスポンスを組み立てる', async () => {
    const result = await runNanikiru(REQUEST, stub(VALID_RESPONSE));
    expect(result.recommended.discard).toBe('5s');
    expect(result.recommended.shanten).toBe(0);
    expect(result.recommended.reason).toBe('5sは孤立牌のため。');
  });

  it('ソルバーの全候補を含める', async () => {
    const result = await runNanikiru(REQUEST, stub(VALID_RESPONSE));
    expect(result.solver.candidates.length).toBeGreaterThan(1);
  });

  it('システム指示とプロンプトをモデルに渡す', async () => {
    const client = stub(VALID_RESPONSE);
    await runNanikiru(REQUEST, client);
    const [system, user] = vi.mocked(client.generate).mock.calls[0]!;
    expect(system).toContain('Mリーグルール');
    expect(user).toContain('【手牌】');
    expect(user).toContain('【打牌候補（計算済み）】');
  });
});

describe('runNanikiru: モデル出力が壊れている場合', () => {
  it('1回だけリトライする', async () => {
    const client = stub('壊れた応答', VALID_RESPONSE);
    const result = await runNanikiru(REQUEST, client);
    expect(client.generate).toHaveBeenCalledTimes(2);
    expect(result.recommended.discard).toBe('5s');
  });

  it('リトライしても失敗すればソルバーの結果だけを返す', async () => {
    const client = stub('壊れた応答', 'これも壊れている');
    const result = await runNanikiru(REQUEST, client);
    expect(client.generate).toHaveBeenCalledTimes(2);
    expect(result.recommended.discard).toBe('5s');
    expect(result.recommended.reason).toBe('');
    expect(result.warnings.join()).toContain('解釈できません');
  });
});

describe('runNanikiru: 入力の検証', () => {
  it('局面が不正なら InvalidSituationError を投げる', async () => {
    await expect(
      runNanikiru({...REQUEST, turn: 99}, stub(VALID_RESPONSE)),
    ).rejects.toThrow(InvalidSituationError);
  });

  it('手牌が不正なら InvalidHandError を投げる', async () => {
    await expect(
      runNanikiru({...REQUEST, hand: REQUEST.hand.slice(1)}, stub(VALID_RESPONSE)),
    ).rejects.toThrow(InvalidHandError);
  });

  it('入力が不正ならモデルを呼ばない', async () => {
    const client = stub(VALID_RESPONSE);
    await expect(runNanikiru({...REQUEST, turn: 99}, client)).rejects.toThrow();
    expect(client.generate).not.toHaveBeenCalled();
  });
});

describe('runNanikiru: モデル呼び出しの失敗', () => {
  it('例外はそのまま伝播する', async () => {
    const client: ModelClient = {
      generate: vi.fn(async () => {
        throw new Error('Vertex AI の呼び出しに失敗しました');
      }),
    };
    await expect(runNanikiru(REQUEST, client)).rejects.toThrow('Vertex AI');
  });
});
