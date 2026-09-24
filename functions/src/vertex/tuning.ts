/**
 * プリファレンスチューニング（DPO）のジョブ定義。
 *
 * SDK呼び出しから「何を送るか」を切り離しておく。実際にジョブを投げないと
 * 確かめられない部分を最小にするため（nanikiru-ai-design-doc.md §6.4）。
 */

import {MODEL_FALLBACK} from './client.js';

const DEFAULT_LOCATION = 'us-central1';

export type TuningConfig = {
  readonly project: string;
  readonly location: string;
  /** 学習データを置く GCS バケット（gs:// から始まる） */
  readonly bucket: string;
  /** チューニングの土台にするモデル */
  readonly baseModel: string;
};

/** 環境変数からチューニングの設定を読む。 */
export function resolveTuningConfig(
  env: Record<string, string | undefined>,
): TuningConfig {
  const project = env['GOOGLE_CLOUD_PROJECT'];
  if (!project) {
    throw new Error('GOOGLE_CLOUD_PROJECT が設定されていません（例: mahjong416）');
  }
  const bucket = env['NANIKIRU_TUNING_BUCKET'];
  if (!bucket) {
    throw new Error(
      'NANIKIRU_TUNING_BUCKET が設定されていません（例: gs://mahjong416-nanikiru）',
    );
  }
  return {
    project,
    location: env['VERTEX_LOCATION'] ?? DEFAULT_LOCATION,
    bucket: bucket.startsWith('gs://') ? bucket : `gs://${bucket}`,
    baseModel: env['NANIKIRU_BASE_MODEL'] ?? MODEL_FALLBACK,
  };
}

export type TuningRequestOptions = {
  readonly baseModel: string;
  readonly trainingUri: string;
  readonly validationUri?: string;
  readonly displayName: string;
  readonly epochCount?: number;
};

export type TuningRequest = {
  readonly baseModel: string;
  readonly trainingDataset: {readonly gcsUri: string};
  readonly config: {
    readonly method: 'PREFERENCE_TUNING';
    readonly tunedModelDisplayName: string;
    readonly validationDataset?: {readonly gcsUri: string};
    readonly epochCount?: number;
  };
};

/**
 * チューニングジョブの生成パラメータを組み立てる。
 *
 * 省略可能な項目は「指定が無ければ送らない」。既定値をこちらで決め打つと、
 * サービス側の推奨値が変わったときに追随できなくなるため。
 */
export function buildTuningRequest(
  options: TuningRequestOptions,
): TuningRequest {
  return {
    baseModel: options.baseModel,
    trainingDataset: {gcsUri: options.trainingUri},
    config: {
      method: 'PREFERENCE_TUNING',
      tunedModelDisplayName: options.displayName,
      ...(options.validationUri
        ? {validationDataset: {gcsUri: options.validationUri}}
        : {}),
      ...(options.epochCount === undefined
        ? {}
        : {epochCount: options.epochCount}),
    },
  };
}
