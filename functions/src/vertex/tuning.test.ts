import {describe, expect, it} from 'vitest';

import {buildTuningRequest, resolveTuningConfig} from './tuning.js';

describe('resolveTuningConfig', () => {
  it('環境変数からプロジェクトとバケットを読む', () => {
    const config = resolveTuningConfig({
      GOOGLE_CLOUD_PROJECT: 'mahjong416',
      NANIKIRU_TUNING_BUCKET: 'gs://mahjong416-nanikiru',
    });
    expect(config.project).toBe('mahjong416');
    expect(config.bucket).toBe('gs://mahjong416-nanikiru');
    expect(config.location).toBe('us-central1');
    expect(config.baseModel).toBe('gemini-2.5-flash');
  });

  it('プロジェクトが無ければ落とす', () => {
    expect(() =>
      resolveTuningConfig({NANIKIRU_TUNING_BUCKET: 'gs://b'}),
    ).toThrow(/GOOGLE_CLOUD_PROJECT/);
  });

  it('バケットが無ければ落とす', () => {
    expect(() =>
      resolveTuningConfig({GOOGLE_CLOUD_PROJECT: 'mahjong416'}),
    ).toThrow(/NANIKIRU_TUNING_BUCKET/);
  });

  it('バケットの gs:// は省略しても補う', () => {
    const config = resolveTuningConfig({
      GOOGLE_CLOUD_PROJECT: 'mahjong416',
      NANIKIRU_TUNING_BUCKET: 'mahjong416-nanikiru',
    });
    expect(config.bucket).toBe('gs://mahjong416-nanikiru');
  });
});

describe('buildTuningRequest', () => {
  const base = {
    baseModel: 'gemini-2.5-flash',
    trainingUri: 'gs://b/train.jsonl',
    displayName: 'nanikiru-22',
  };

  it('プリファレンスチューニングとして組み立てる', () => {
    const request = buildTuningRequest(base);
    expect(request.baseModel).toBe('gemini-2.5-flash');
    expect(request.trainingDataset.gcsUri).toBe('gs://b/train.jsonl');
    expect(request.config.method).toBe('PREFERENCE_TUNING');
    expect(request.config.tunedModelDisplayName).toBe('nanikiru-22');
  });

  it('検証データが無いときは validationDataset を付けない', () => {
    expect(buildTuningRequest(base).config.validationDataset).toBeUndefined();
  });

  it('検証データがあれば付ける', () => {
    const request = buildTuningRequest({
      ...base,
      validationUri: 'gs://b/validation.jsonl',
    });
    expect(request.config.validationDataset?.gcsUri).toBe(
      'gs://b/validation.jsonl',
    );
  });

  it('エポック数を指定できる', () => {
    expect(buildTuningRequest({...base, epochCount: 5}).config.epochCount).toBe(5);
  });

  it('エポック数を省いたら既定値に任せる', () => {
    expect(buildTuningRequest(base).config.epochCount).toBeUndefined();
  });
});
