import {describe, expect, it, vi} from 'vitest';
import {
  createModelClient,
  MODEL_FALLBACK,
  resolveModelConfig,
  type GenerateContentSdk,
} from './client.js';

describe('resolveModelConfig', () => {
  it('環境変数から設定を読む', () => {
    expect(
      resolveModelConfig({
        GOOGLE_CLOUD_PROJECT: 'mahjong416',
        VERTEX_LOCATION: 'us-central1',
        NANIKIRU_MODEL: 'tuned-model-id',
      }),
    ).toEqual({
      project: 'mahjong416',
      location: 'us-central1',
      model: 'tuned-model-id',
    });
  });

  it('リージョンとモデルには既定値がある', () => {
    const config = resolveModelConfig({GOOGLE_CLOUD_PROJECT: 'mahjong416'});
    expect(config.location).toBe('us-central1');
    expect(config.model).toBe(MODEL_FALLBACK);
  });

  it('プロジェクトが無ければ失敗する', () => {
    expect(() => resolveModelConfig({})).toThrow(/GOOGLE_CLOUD_PROJECT/);
  });
});

describe('createModelClient', () => {
  type Params = Parameters<GenerateContentSdk['models']['generateContent']>[0];

  /** generateContent だけを差し替えた擬似SDK */
  function fakeSdk(text: string | undefined) {
    return {
      models: {
        generateContent: vi.fn(async (_params: Params) => ({text})),
      },
    };
  }

  const config = {project: 'mahjong416', location: 'us-central1', model: 'gemini-2.5-flash'};

  it('システム指示とプロンプトを渡す', async () => {
    const sdk = fakeSdk('応答');
    const client = createModelClient(config, sdk);
    await client.generate('システム指示', 'プロンプト');

    const [params] = vi.mocked(sdk.models.generateContent).mock.calls[0]!;
    expect(params.model).toBe('gemini-2.5-flash');
    expect(params.contents).toBe('プロンプト');
    expect(params.config?.systemInstruction).toBe('システム指示');
  });

  it('応答のテキストを返す', async () => {
    const client = createModelClient(config, fakeSdk('【推奨打牌】9m'));
    expect(await client.generate('s', 'u')).toBe('【推奨打牌】9m');
  });

  it('温度を0にして出力を安定させる', async () => {
    const sdk = fakeSdk('応答');
    await createModelClient(config, sdk).generate('s', 'u');
    const [params] = vi.mocked(sdk.models.generateContent).mock.calls[0]!;
    expect(params.config?.temperature).toBe(0);
  });

  it('テキストが空なら失敗する', async () => {
    const client = createModelClient(config, fakeSdk(undefined));
    await expect(client.generate('s', 'u')).rejects.toThrow(/応答/);
  });
});

describe('createModelClient: 一時的な失敗の再試行', () => {
  const config = {project: 'mahjong416', location: 'us-central1', model: 'gemini-2.5-flash'};
  type Params = Parameters<GenerateContentSdk['models']['generateContent']>[0];

  /** 指定回数だけ失敗してから成功するSDK */
  function flakySdk(failures: number, error: unknown) {
    let calls = 0;
    return {
      models: {
        generateContent: vi.fn(async (_params: Params) => {
          calls += 1;
          if (calls <= failures) {
            throw error;
          }
          return {text: '【推奨打牌】9m'};
        }),
      },
    };
  }

  const network = Object.assign(new TypeError('fetch failed'), {
    cause: new Error('read ECONNRESET'),
  });

  it('通信エラーなら再試行して成功を返す', async () => {
    const sdk = flakySdk(2, network);
    const client = createModelClient(config, sdk, {delayMs: 0});
    expect(await client.generate('s', 'u')).toBe('【推奨打牌】9m');
    expect(sdk.models.generateContent).toHaveBeenCalledTimes(3);
  });

  it('試行回数を使い切れば失敗する', async () => {
    const sdk = flakySdk(99, network);
    const client = createModelClient(config, sdk, {attempts: 2, delayMs: 0});
    await expect(client.generate('s', 'u')).rejects.toThrow(/2回失敗/);
    expect(sdk.models.generateContent).toHaveBeenCalledTimes(2);
  });

  it('応答が空でも再試行する', async () => {
    let calls = 0;
    const sdk = {
      models: {
        generateContent: vi.fn(async (_params: Params) => {
          calls += 1;
          return calls === 1 ? {text: undefined} : {text: '【推奨打牌】1m'};
        }),
      },
    };
    const client = createModelClient(config, sdk, {delayMs: 0});
    expect(await client.generate('s', 'u')).toBe('【推奨打牌】1m');
  });

  it('恒久的な失敗は再試行しない', async () => {
    const sdk = flakySdk(99, new Error('PERMISSION_DENIED: 権限がありません'));
    const client = createModelClient(config, sdk, {delayMs: 0});
    await expect(client.generate('s', 'u')).rejects.toThrow(/PERMISSION_DENIED/);
    expect(sdk.models.generateContent).toHaveBeenCalledTimes(1);
  });
});

describe('createModelClient: タイムアウト', () => {
  const config = {project: 'mahjong416', location: 'us-central1', model: 'gemini-2.5-flash'};
  type Params = Parameters<GenerateContentSdk['models']['generateContent']>[0];

  it('制限時間つきの AbortSignal を渡す', async () => {
    const sdk = {
      models: {
        generateContent: vi.fn(async (_params: Params) => ({text: 'ok'})),
      },
    };
    await createModelClient(config, sdk).generate('s', 'u');
    const [params] = vi.mocked(sdk.models.generateContent).mock.calls[0]!;
    expect(params.config?.abortSignal).toBeInstanceOf(AbortSignal);
  });

  it('応答が返らない場合は中断して再試行する', async () => {
    let calls = 0;
    const sdk = {
      models: {
        generateContent: vi.fn(async (params: Params) => {
          calls += 1;
          if (calls === 1) {
            // 応答せず、中断されるまで待つ
            return await new Promise<{text?: string}>((_resolve, reject) => {
              params.config?.abortSignal?.addEventListener('abort', () => {
                reject(new Error('The operation was aborted'));
              });
            });
          }
          return {text: '【推奨打牌】9m'};
        }),
      },
    };
    const client = createModelClient(config, sdk, {delayMs: 0, timeoutMs: 20});
    expect(await client.generate('s', 'u')).toBe('【推奨打牌】9m');
    expect(sdk.models.generateContent).toHaveBeenCalledTimes(2);
  });
});
