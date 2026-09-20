/**
 * プロンプトの構築。
 *
 * シャンテン数・受け入れ枚数はソルバーが計算した事実として与え、
 * モデルには打牌の判断と説明だけを担わせる
 * （nanikiru-ai-design-doc.md §1.1, §4.1）。
 */

import {formatMelds} from '../solver/hand.js';
import {type Candidate} from '../solver/candidates.js';
import {formatTile, formatTiles, type Tile} from '../solver/tile.js';
import {type Situation} from '../situation.js';

/**
 * モデルへのシステム指示。
 *
 * 学習データ（DPO）と推論時で同一のものを使う。ずれるとチューニングの
 * 効果が出ないため、ここを唯一の定義とする。
 */
export function buildSystemInstruction(options: PromptOptions = {}): string {
  const withSolver = options.withSolver ?? true;
  const givens = withSolver
    ? [
        '- 局・自風・巡目・ドラ・手牌・ツモ牌・副露',
        '- 打牌候補ごとのシャンテン数と受け入れ枚数（計算済み。必ず正しい）',
        '',
        '計算済みの数値は検算せず、そのまま使うこと。',
        '牌効率だけで決まらない部分（打点と速度の兼ね合い、字牌の価値、',
        'ドラの扱い）を判断し、その理由を述べること。',
      ]
    : [
        '- 局・自風・巡目・ドラ・手牌・ツモ牌・副露',
        '',
        'シャンテン数と受け入れ枚数は自分で数えること。',
      ];

  return [
    'あなたは麻雀の何切る問題に答える打ち手です。',
    '',
    '# 前提ルール',
    '- 半荘戦、Mリーグルール（赤あり、一発裏あり、食いタンあり、後付けあり）',
    '- 捨て牌・点棒状況・他家の情報は与えられない。手牌と局面だけで判断する',
    '',
    '# 与えられる情報',
    ...givens,
    '',
    '# 出力フォーマット',
    '以下の形式で、この順序どおりに出力すること。',
    '',
    '【推奨打牌】<牌>',
    '【シャンテン数】<n>シャンテン',
    '【受入】<n>枚（<牌>:<枚数> ...）',
    '【理由】',
    '<推奨打牌を選ぶ根拠>',
    '',
    '推奨打牌は必ず手牌またはツモ牌にある牌から選ぶこと。',
    ...(withSolver
      ? ['シャンテン数と受入は、与えられた打牌候補の数値をそのまま書くこと。']
      : []),
  ].join('\n');
}

/**
 * プロンプトの組み立て方。
 *
 * withSolver を false にすると、ソルバーの計算結果を与えない形になる。
 * ベースライン測定で「計算結果を渡す効果」を切り分けるために使う
 * （design doc §7.4）。
 */
export type PromptOptions = {
  readonly withSolver?: boolean;
};

/** 局面と打牌候補から、モデルへの入力を組み立てる */
export function buildUserPrompt(
  situation: Situation,
  candidates: readonly Candidate[],
  options: PromptOptions = {},
): string {
  const lines = [
    `【局】${situation.round}`,
    `【自風】${situation.seat}`,
    `【巡目】${situation.turn}巡目`,
    `【ドラ】${formatTiles(situation.dora).join(' ')}`,
    `【副露】${formatMelds(situation.hand.melds)}`,
    `【手牌】${formatTiles(situation.hand.tiles).join('')}`,
  ];
  if (situation.hand.draw !== undefined) {
    lines.push(`【ツモ】${formatTile(situation.hand.draw)}`);
  }

  if (options.withSolver ?? true) {
    lines.push('', '【打牌候補（計算済み）】');
    for (const candidate of candidates) {
      lines.push(formatCandidate(candidate));
    }
  }
  return lines.join('\n');
}

/** 例: 5s: 0シャンテン 受入4枚（3p:4） */
function formatCandidate(candidate: Candidate): string {
  const breakdown = candidate.ukeire
    .map(({tile, count}) => `${formatTile(tile)}:${count}`)
    .join(' ');
  const detail = breakdown === '' ? '' : `（${breakdown}）`;
  return `${formatTile(candidate.discard)}: ${candidate.shanten}シャンテン 受入${candidate.ukeireTotal}枚${detail}`;
}

export type AnswerParts = {
  readonly discard: Tile;
  readonly shanten: number;
  readonly ukeire: readonly {readonly tile: Tile; readonly count: number}[];
  readonly ukeireTotal: number;
  readonly reason: string;
};

/**
 * 回答を出力フォーマットに整形する（design doc §6.6）。
 *
 * 学習データ（DPO）の preferred / dispreferred 双方をこの関数で作る。
 * 推論時のモデル出力と同じ形になっていなければチューニングの効果が出ない
 * ため、parse.ts で読み戻せることをテストで担保している。
 */
export function formatAnswer(answer: AnswerParts): string {
  const breakdown = answer.ukeire
    .map(({tile, count}) => `${formatTile(tile)}:${count}`)
    .join(' ');
  return [
    `【推奨打牌】${formatTile(answer.discard)}`,
    `【シャンテン数】${answer.shanten}シャンテン`,
    `【受入】${answer.ukeireTotal}枚${breakdown === '' ? '' : `（${breakdown}）`}`,
    '【理由】',
    answer.reason,
  ].join('\n');
}
