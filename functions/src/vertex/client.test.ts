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
