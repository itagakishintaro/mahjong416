/**
 * 何切るAIの実行フロー。
 *
 * 入力検証 → ソルバーによる計算 → プロンプト構築 → モデル呼び出し →
 * 後処理（nanikiru-ai-design-doc.md §4.1）。
 *
 * モデルの呼び出しは差し替え可能にしてあり、この層は Vertex AI に依存しない。
 */

import {composeResponse, type NanikiruResponse} from './compose.js';
import {buildSystemInstruction, buildUserPrompt} from '../prompt/build.js';
import {evaluateCandidates, type Candidate} from '../solver/candidates.js';
import {parseModelResponse, ResponseParseError, type ModelResponse} from '../prompt/parse.js';
import {parseSituation, type Situation, type SituationInput} from '../situation.js';
import {type PromptOptions} from '../prompt/build.js';

/** モデルへの問い合わせ。Vertex AI の実装と差し替えられるようにする */
export type ModelClient = {
  generate(systemInstruction: string, userPrompt: string): Promise<string>;
};

/** 出力の解釈に失敗したときの再試行回数（初回を含めて2回まで呼ぶ） */
const MAX_ATTEMPTS = 2;

/** 入力を検証し、推奨打牌とその理由を返す */
export async function runNanikiru(
  input: SituationInput,
  client: ModelClient,
  options: PromptOptions = {},
): Promise<NanikiruResponse> {
  return runNanikiruForSituation(parseSituation(input), client, options);
}

/** 検証済みの局面から実行する。評価ハーネスはこちらを使う */
export async function runNanikiruForSituation(
  situation: Situation,
  client: ModelClient,
  options: PromptOptions = {},
): Promise<NanikiruResponse> {
  const candidates = evaluateCandidates(situation.hand);

  const systemInstruction = buildSystemInstruction(options);
  const userPrompt = buildUserPrompt(situation, candidates, options);

  const warnings: string[] = [];
  const model = await requestModel(client, systemInstruction, userPrompt, candidates, warnings);

  const response = composeResponse(candidates, model);
  return {...response, warnings: [...warnings, ...response.warnings]};
}

/**
 * モデルを呼び、出力を解釈する。
 * 解釈に失敗した場合は1回だけ再試行し、それでも失敗すればソルバーの
 * 最良手だけを返す（design doc §8.5）。
 */
async function requestModel(
  client: ModelClient,
  systemInstruction: string,
  userPrompt: string,
  candidates: readonly Candidate[],
  warnings: string[],
): Promise<ModelResponse> {
  let lastError: ResponseParseError | undefined;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const text = await client.generate(systemInstruction, userPrompt);
    try {
      return parseModelResponse(text);
    } catch (error) {
      if (!(error instanceof ResponseParseError)) {
        throw error;
      }
      lastError = error;
    }
  }

  warnings.push(
    `${lastError?.message ?? 'モデルの応答を解釈できません'}（${MAX_ATTEMPTS}回試行）。ソルバーの計算結果のみを返します`,
  );
  return solverOnlyResponse(candidates);
}

/** モデルの出力が使えないときに、ソルバーの最良手だけで応答を組み立てる */
function solverOnlyResponse(candidates: readonly Candidate[]): ModelResponse {
  const best = candidates[0];
  if (best === undefined) {
    throw new Error('打牌候補がありません');
  }
  return {
    discard: best.discard,
    shanten: undefined,
    ukeireTotal: undefined,
    reason: '',
  };
}
