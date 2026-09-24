import {describe, expect, it, vi} from 'vitest';

import {parseSituation} from '../situation.js';
import {
  generateAmateurRejected,
  validateAmateurAnswer,
} from './amateur-rejected.js';

const situation = parseSituation({
  round: '東1局',
  seat: '東家',
  turn: 7,
  dora: ['5s'],
  hand: ['1m','2m','3m','4m','5m','6m','7m','8m','9m','東','東','1p','2p'],
  draw: '5s',
  melds: [],
});

const GOOD_REASON =
  '東は自風の役牌で、鳴ければ一気に加速する。ピンズの伸びは薄く、' +
  'ここで1pを外しても手の進行にほとんど響かない。';

describe('validateAmateurAnswer', () => {
  const context = {answerDiscard: '5s', reason: GOOD_REASON, discard: '1p'};

  it('条件を満たせば問題なし', () => {
    expect(validateAmateurAnswer(context)).toEqual([]);
  });

  it('正解と同じ打牌は弾く', () => {
    expect(validateAmateurAnswer({...context, discard: '5s'})).toContain(
      '正解と同じ打牌',
    );
  });

  it('受け入れ枚数に言及していたら弾く', () => {
    const result = validateAmateurAnswer({
      ...context,
      reason: `受け入れが36枚と最も広い。${GOOD_REASON}`,
    });
    expect(result.join()).toMatch(/数字/);
  });

  it('シャンテン数に言及していたら弾く', () => {
    const result = validateAmateurAnswer({
      ...context,
      reason: `1シャンテンを維持できる。${GOOD_REASON}`,
    });
    expect(result.join()).toMatch(/数字/);
  });

  it('長すぎる理由文は弾く', () => {
    const result = validateAmateurAnswer({...context, reason: 'あ'.repeat(200)});
    expect(result.join()).toMatch(/長い/);
  });

  it('短すぎる理由文は弾く', () => {
    expect(validateAmateurAnswer({...context, reason: '1pが不要'}).join()).toMatch(
      /短い/,
    );
  });
});

describe('generateAmateurRejected', () => {
  const reply = (discard: string, reason: string) =>
    `【推奨打牌】${discard}\n【理由】\n${reason}`;

  it('条件を満たす答えをそのまま採用する', async () => {
    const client = {generate: vi.fn().mockResolvedValue(reply('1p', GOOD_REASON))};
    const result = await generateAmateurRejected(situation, '5s', client);
    expect(result?.discard).toBe('1p');
    expect(result?.reason).toBe(GOOD_REASON);
    expect(client.generate).toHaveBeenCalledTimes(1);
  });

  it('正解と同じ答えなら、その牌を除外して聞き直す', async () => {
    const client = {
      generate: vi
        .fn()
        .mockResolvedValueOnce(reply('5s', GOOD_REASON))
        .mockResolvedValueOnce(reply('1p', GOOD_REASON)),
    };
    const result = await generateAmateurRejected(situation, '5s', client);
    expect(result?.discard).toBe('1p');
    expect(client.generate).toHaveBeenCalledTimes(2);
    expect(client.generate.mock.calls[1]?.[1]).toContain('選ばない');
  });

  it('数字を書いてきたら聞き直す', async () => {
    const client = {
      generate: vi
        .fn()
        .mockResolvedValueOnce(reply('1p', `受け入れは36枚。${GOOD_REASON}`))
        .mockResolvedValueOnce(reply('1p', GOOD_REASON)),
    };
    const result = await generateAmateurRejected(situation, '5s', client);
    expect(result?.reason).toBe(GOOD_REASON);
    expect(client.generate).toHaveBeenCalledTimes(2);
  });

  it('試行を使い切ったら諦める（データを汚さない）', async () => {
    const client = {generate: vi.fn().mockResolvedValue(reply('5s', GOOD_REASON))};
    expect(
      await generateAmateurRejected(situation, '5s', client, {attempts: 2}),
    ).toBeUndefined();
    expect(client.generate).toHaveBeenCalledTimes(2);
  });

  it('解釈できない応答でも落ちずに聞き直す', async () => {
    const client = {
      generate: vi
        .fn()
        .mockResolvedValueOnce('よくわからない出力')
        .mockResolvedValueOnce(reply('1p', GOOD_REASON)),
    };
    const result = await generateAmateurRejected(situation, '5s', client);
    expect(result?.discard).toBe('1p');
  });
});
