/**
 * Vertex AI（Gemini Enterprise Agent Platform）のクライアント。
 *
 * 認証は Application Default Credentials に任せる。サービスアカウントキーを
 * ファイルとして持たない（DEVELOPMENT.md「GCP / Vertex AI」）。
 */

import {GoogleGenAI} from '@google/genai';
import {type ModelClient} from '../api/nanikiru.js';

/** 一時的な失敗に対する試行回数（初回を含む） */
const DEFAULT_ATTEMPTS = 3;
/** 再試行の待ち時間の基準。試行ごとに倍にする */
const DEFAULT_RETRY_DELAY_MS = 1000;
/**
 * 1回の呼び出しの制限時間。
 *
 * fetch には既定のタイムアウトが無く、接続が死んでも例外が飛ばずに
 * 永久に待ち続けることがある（実際にベースライン測定が43分ハングした）。
 */
const DEFAULT_TIMEOUT_MS = 180_000;

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
      config?: {
      systemInstruction?: string;
      temperature?: number;
      abortSignal?: AbortSignal;
    };
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

export type RetryOptions = {
  readonly attempts?: number;
  readonly delayMs?: number;
  /** 1回の呼び出しの制限時間 */
  readonly timeoutMs?: number;
};

/**
 * Vertex AI を呼ぶ ModelClient を作る。
 *
 * 通信の一時的な失敗（ECONNRESET など）で評価の実行全体が落ちないよう、
 * 短い間隔で再試行する。
 */
export function createModelClient(
  config: ModelConfig,
  sdk: GenerateContentSdk = createSdk(config),
  retry: RetryOptions = {},
): ModelClient {
  const attempts = retry.attempts ?? DEFAULT_ATTEMPTS;
  const delayMs = retry.delayMs ?? DEFAULT_RETRY_DELAY_MS;
  const timeoutMs = retry.timeoutMs ?? DEFAULT_TIMEOUT_MS;

  return {
    async generate(systemInstruction, userPrompt) {
      let lastError: unknown;
      for (let attempt = 0; attempt < attempts; attempt++) {
        try {
          return await callOnce(
            sdk,
            config,
            systemInstruction,
            userPrompt,
            timeoutMs,
          );
        } catch (error) {
          if (!isTransient(error)) {
            throw error;
          }
          lastError = error;
          if (attempt < attempts - 1) {
            await delay(delayMs * 2 ** attempt);
          }
        }
      }
      throw new Error(
        `Vertex AI の呼び出しに${attempts}回失敗しました: ${describe(lastError)}`,
      );
    },
  };
}

async function callOnce(
  sdk: GenerateContentSdk,
  config: ModelConfig,
  systemInstruction: string,
  userPrompt: string,
  timeoutMs: number,
): Promise<string> {
  const response = await sdk.models.generateContent({
    model: config.model,
    contents: userPrompt,
    config: {
      systemInstruction,
      // 同じ局面には同じ答えを返してほしいため、揺らぎを抑える
      temperature: 0,
      abortSignal: AbortSignal.timeout(timeoutMs),
    },
  });
  if (response.text === undefined || response.text === '') {
    throw new EmptyResponseError();
  }
  return response.text;
}

/** 応答が空。一時的な失敗として再試行する */
class EmptyResponseError extends Error {
  constructor() {
    super('モデルから応答が返りませんでした');
    this.name = 'EmptyResponseError';
  }
}

/** 通信の一時的な失敗か。恒久的な失敗（認証・不正な引数）は再試行しない */
function isTransient(error: unknown): boolean {
  if (error instanceof EmptyResponseError) {
    return true;
  }
  const text = describe(error).toLowerCase();
  return [
    'aborted',
    'timeouterror',
    'the operation was aborted',
    'econnreset',
    'etimedout',
    'econnrefused',
    'eai_again',
    'fetch failed',
    'socket hang up',
    'unavailable',
    'deadline',
    'resource_exhausted',
    'too many requests',
    'internal error',
    '429',
    '500',
    '502',
    '503',
    '504',
  ].some((marker) => text.includes(marker));
}

function describe(error: unknown): string {
  if (error instanceof Error) {
    const cause = error.cause === undefined ? '' : ` / ${String(error.cause)}`;
    return `${error.message}${cause}`;
  }
  return String(error);
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createSdk(config: ModelConfig): GenerateContentSdk {
  return new GoogleGenAI({
    enterprise: true,
    project: config.project,
    location: config.location,
  }) as unknown as GenerateContentSdk;
}
