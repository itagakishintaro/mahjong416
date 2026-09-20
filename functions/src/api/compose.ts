/**
 * APIレスポンスの組み立てと、モデル出力の後処理。
 *
 * モデルの出力は信用せず、数値はソルバーの計算値で確定させる。
 * 次善手はモデルに生成させず、ソルバーの結果から機械的に付加する
 * （nanikiru-ai-design-doc.md §3.5, §8.5）。
 */

import {type Candidate} from '../solver/candidates.js';
import {type ModelResponse} from '../prompt/parse.js';
import {formatTile} from '../solver/tile.js';

/** 次善手として扱う受入枚数の下限（推奨打牌比） */
const ALTERNATIVE_UKEIRE_RATIO = 0.85;
/** 次善手の最大件数 */
const MAX_ALTERNATIVES = 2;

export type UkeireDto = {
  readonly total: number;
  readonly tiles: readonly {readonly tile: string; readonly count: number}[];
};

export type NanikiruResponse = {
  readonly recommended: {
    readonly discard: string;
    readonly shanten: number;
    readonly ukeire: UkeireDto;
    readonly reason: string;
  };
  readonly alternatives: readonly {
    readonly discard: string;
    readonly shanten: number;
    readonly ukeire: UkeireDto;
    /** 牌効率の差分を述べる定型コメント。自然文の理由ではない */
    readonly note: string;
  }[];
  readonly solver: {
    readonly candidates: readonly {
      readonly discard: string;
      readonly shanten: number;
      readonly ukeireTotal: number;
    }[];
  };
  /** モデル出力を補正した箇所。空なら補正なし */
  readonly warnings: readonly string[];
  /**
   * モデルが申告したシャンテン数・受入枚数がソルバーと一致していたか。
   * 申告が無い場合は true。評価の「数値整合率」に使う（design doc §7.2）。
   */
  readonly numbersConsistent: boolean;
};

/**
 * ソルバーの計算結果とモデルの応答からレスポンスを組み立てる。
 *
 * @param candidates 評価済みの打牌候補（最良手が先頭）
 */
export function composeResponse(
  candidates: readonly Candidate[],
  model: ModelResponse,
): NanikiruResponse {
  const warnings: string[] = [];
  const recommended = resolveRecommended(candidates, model, warnings);
  const numbersConsistent =
    (model.shanten === undefined || model.shanten === recommended.shanten) &&
    (model.ukeireTotal === undefined ||
      model.ukeireTotal === recommended.ukeireTotal);

  return {
    recommended: {
      discard: formatTile(recommended.discard),
      shanten: recommended.shanten,
      ukeire: toUkeireDto(recommended),
      reason: model.reason,
    },
    alternatives: selectAlternatives(candidates, recommended),
    solver: {
      candidates: candidates.map((candidate) => ({
        discard: formatTile(candidate.discard),
        shanten: candidate.shanten,
        ukeireTotal: candidate.ukeireTotal,
      })),
    },
    warnings,
    numbersConsistent,
  };
}

/**
 * モデルの推奨打牌を候補から引き当てる。
 * 手牌に無い牌を推奨した場合はソルバーの最良手にフォールバックする。
 */
function resolveRecommended(
  candidates: readonly Candidate[],
  model: ModelResponse,
  warnings: string[],
): Candidate {
  const notation = formatTile(model.discard);
  const matched = candidates.find(
    (candidate) => formatTile(candidate.discard) === notation,
  );

  if (matched === undefined) {
    const fallback = candidates[0];
    if (fallback === undefined) {
      throw new Error('打牌候補がありません');
    }
    warnings.push(
      `推奨打牌「${notation}」は手牌にないため、ソルバーの最良手「${formatTile(fallback.discard)}」に置き換えました`,
    );
    return fallback;
  }

  if (model.shanten !== undefined && model.shanten !== matched.shanten) {
    warnings.push(
      `シャンテン数の申告（${model.shanten}）がソルバーの計算値（${matched.shanten}）と異なるため置き換えました`,
    );
  }
  if (model.ukeireTotal !== undefined && model.ukeireTotal !== matched.ukeireTotal) {
    warnings.push(
      `受入枚数の申告（${model.ukeireTotal}枚）がソルバーの計算値（${matched.ukeireTotal}枚）と異なるため置き換えました`,
    );
  }
  return matched;
}

/**
 * 次善手を選ぶ。推奨打牌と同じシャンテン数で、受入が一定割合以上のもの。
 * 打点や場況には踏み込まない（根拠が無いため）。
 */
function selectAlternatives(
  candidates: readonly Candidate[],
  recommended: Candidate,
): NanikiruResponse['alternatives'] {
  const threshold = recommended.ukeireTotal * ALTERNATIVE_UKEIRE_RATIO;
  return candidates
    .filter(
      (candidate) =>
        candidate !== recommended &&
        candidate.shanten === recommended.shanten &&
        candidate.ukeireTotal >= threshold,
    )
    .sort((a, b) => b.ukeireTotal - a.ukeireTotal)
    .slice(0, MAX_ALTERNATIVES)
    .map((candidate) => ({
      discard: formatTile(candidate.discard),
      shanten: candidate.shanten,
      ukeire: toUkeireDto(candidate),
      note: buildNote(candidate, recommended),
    }));
}

function buildNote(candidate: Candidate, recommended: Candidate): string {
  const difference = recommended.ukeireTotal - candidate.ukeireTotal;
  if (difference === 0) {
    return `推奨打牌と同じ${recommended.shanten}シャンテンで、受入も同じ`;
  }
  return `推奨打牌と同じ${recommended.shanten}シャンテンだが、受入が${difference}枚少ない`;
}

function toUkeireDto(candidate: Candidate): UkeireDto {
  return {
    total: candidate.ukeireTotal,
    tiles: candidate.ukeire.map(({tile, count}) => ({
      tile: formatTile(tile),
      count,
    })),
  };
}
