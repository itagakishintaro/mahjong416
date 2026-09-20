/**
 * Vertex AI（Gemini Enterprise Agent Platform）のクライアント。
 *
 * 認証は Application Default Credentials に任せる。サービスアカウントキーを
 * ファイルとして持たない（DEVELOPMENT.md「GCP / Vertex AI」）。
 */

import {GoogleGenAI} from '@google/genai';
import {type ModelClient} from '../api/nanikiru.js';

/** チューニング済みモデルが未指定のときに使う素のモデル */
export const MODEL_FALLBACK = 'gemini-2.5-flash';
const DEFAULT_LOCATION = 'us-central1';

export type ModelConfig = {
  readonly project: string;
  readonly location: string;
  /** 素のモデル名、またはチューニング済みエンドポイント */
  readonly model: string;
};

/** generateContent だけを使うため、SDKの最小限の形を型にする */
export type GenerateContentSdk = {
  models: {
    generateContent(params: {
      model: string;
      contents: string;
      config?: {systemInstruction?: string; temperature?: number};
    }): Promise<{text?: string | undefined}>;
  };
};

/** 環境変数からモデルの設定を読む */
export function resolveModelConfig(
  env: Readonly<Record<string, string | undefined>>,
): ModelConfig {
  const project = env['GOOGLE_CLOUD_PROJECT'];
  if (project === undefined || project === '') {
    throw new Error(
      'GOOGLE_CLOUD_PROJECT が設定されていません（例: mahjong416）',
    );
  }
  return {
    project,
    location: env['VERTEX_LOCATION'] ?? DEFAULT_LOCATION,
    model: env['NANIKIRU_MODEL'] ?? MODEL_FALLBACK,
  };
}

/** Vertex AI を呼ぶ ModelClient を作る */
export function createModelClient(
  config: ModelConfig,
  sdk: GenerateContentSdk = createSdk(config),
): ModelClient {
  return {
    async generate(systemInstruction, userPrompt) {
      const response = await sdk.models.generateContent({
        model: config.model,
        contents: userPrompt,
        config: {
          systemInstruction,
          // 同じ局面には同じ答えを返してほしいため、揺らぎを抑える
          temperature: 0,
        },
      });
      if (response.text === undefined || response.text === '') {
        throw new Error('モデルから応答が返りませんでした');
      }
      return response.text;
    },
  };
}

function createSdk(config: ModelConfig): GenerateContentSdk {
  return new GoogleGenAI({
    enterprise: true,
    project: config.project,
    location: config.location,
  }) as unknown as GenerateContentSdk;
}
