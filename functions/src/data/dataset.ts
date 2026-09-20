/**
 * 学習データセットの組み立て。
 *
 * data/problems/ の正本から、train / validation の JSONL を作る
 * （nanikiru-ai-design-doc.md §6.1, §7.1）。
 */

import {buildPreferenceExamples, type PreferenceExample} from './jsonl.js';
import {type Problem} from './problem.js';

export type DatasetStats = {
  readonly total: number;
  /** 学習・検証に使った問題数 */
  readonly used: number;
  /** テスト用に確保されている問題数 */
  readonly test: number;
  readonly skippedUnreviewed: number;
  /** 悪手を作れずに除外した問題数 */
  readonly skippedNoRejected: number;
  readonly trainPairs: number;
  readonly validationPairs: number;
};

export type Dataset = {
  readonly train: readonly PreferenceExample[];
  readonly validation: readonly PreferenceExample[];
  readonly stats: DatasetStats;
};

/**
 * 問題マスタから学習データを組み立てる。
 *
 * テスト用の問題は学習にも検証にも使わない。混ざると評価が信用できなく
 * なるため、ここで機械的に除外する（design doc §7.1）。
 */
export function buildDataset(problems: readonly Problem[]): Dataset {
  const train: PreferenceExample[] = [];
  const validation: PreferenceExample[] = [];
  let used = 0;
  let test = 0;
  let skippedUnreviewed = 0;
  let skippedNoRejected = 0;

  for (const problem of problems) {
    if (problem.meta.split === 'test') {
      test += 1;
      continue;
    }
    if (!problem.meta.reviewed) {
      skippedUnreviewed += 1;
      continue;
    }
    let examples;
    try {
      examples = buildPreferenceExamples(problem);
    } catch {
      // 打牌候補が正解しか無く、悪手を作れない問題
      skippedNoRejected += 1;
      continue;
    }
    if (problem.meta.split === 'validation') {
      validation.push(...examples);
    } else {
      train.push(...examples);
    }
    used += 1;
  }

  return {
    train,
    validation,
    stats: {
      total: problems.length,
      used,
      test,
      skippedUnreviewed,
      skippedNoRejected,
      trainPairs: train.length,
      validationPairs: validation.length,
    },
  };
}
