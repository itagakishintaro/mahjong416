/**
 * 悪手（DPOのdispreferred側）の自動生成。
 *
 * ソルバーは牌効率（シャンテン数・受け入れ枚数）だけで最良手を選び、
 * 打点も最終形も見ていない。麻雀ではそれで最善手になることは少ないため、
 * ソルバーの答えをそのまま悪手として使う
 * （nanikiru-ai-design-doc.md §6.5）。
 *
 * 明らかな悪手より、正解と紙一重の選択肢を悪手にするほうが、
 * 「牌効率だけで決めるな」という対比が鮮明になる。
 */

import {type Candidate} from '../solver/candidates.js';
import {formatTile, type Tile} from '../solver/tile.js';
import {type Discard} from './problem.js';

/**
 * ソルバーの答えから悪手を作る。
 *
 * 最良手が正解と一致する場合は次の候補を使う。候補が正解しか無い場合は
 * 作れないため undefined を返す。
 */
export function autoRejected(
  answer: Tile,
  candidates: readonly Candidate[],
): Discard | undefined {
  const answerNotation = formatTile(answer);
  const correct = candidates.find(
    (candidate) => formatTile(candidate.discard) === answerNotation,
  );
  if (candidates.length > 0 && correct === undefined) {
    throw new Error(`正解の打牌「${answerNotation}」が候補にありません`);
  }

  const picked = candidates.find(
    (candidate) => formatTile(candidate.discard) !== answerNotation,
  );
  if (picked === undefined || correct === undefined) {
    return undefined;
  }
  return {discard: picked.discard, reason: buildReason(picked, correct)};
}

/**
 * 牌効率だけを根拠にした（浅い）理由文を作る。
 *
 * 正解の打牌には触れない。悪手側の出力に正解が現れると対比が崩れるため。
 */
function buildReason(picked: Candidate, correct: Candidate): string {
  const notation = formatTile(picked.discard);

  if (picked.shanten < correct.shanten) {
    return `打${notation}なら${picked.shanten}シャンテンになり、手が一段進む。まずは手を進めるのが基本なので、ここは素直に受け入れを狭めない形に取る。`;
  }
  if (picked.ukeireTotal > correct.ukeireTotal) {
    return `打${notation}なら受け入れが${picked.ukeireTotal}枚と最も広くなる。${picked.shanten}シャンテンを保ったまま最大限に受けられるので、一番広い形に取る。`;
  }
  if (picked.ukeireTotal === correct.ukeireTotal) {
    return `打${notation}でも受け入れは${picked.ukeireTotal}枚で同じ。牌効率に差がないので、どちらを切っても変わらないと判断した。`;
  }
  return `打${notation}でも${picked.shanten}シャンテンを保てる。受け入れの差はわずかなので、ここは形を整えることを優先する。`;
}
