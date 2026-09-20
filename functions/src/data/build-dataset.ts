/**
 * 学習データセットの生成コマンド。
 *
 *   npm run dataset
 *
 * data/problems/*.json を読み、data/build/ に train.jsonl と
 * validation.jsonl を書き出す。
 */

import {mkdir, readdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {buildDataset} from './dataset.js';
import {toJsonl} from './jsonl.js';
import {parseProblem, type Problem} from './problem.js';

/** functions/lib/data/ からリポジトリのルートへ */
const REPO_ROOT = path.resolve(import.meta.dirname, '../../..');
const PROBLEMS_DIR = path.join(REPO_ROOT, 'data', 'problems');
const BUILD_DIR = path.join(REPO_ROOT, 'data', 'build');

async function loadProblems(directory: string): Promise<Problem[]> {
  let entries: string[];
  try {
    entries = await readdir(directory);
  } catch {
    return [];
  }

  const files = entries.filter((name) => name.endsWith('.json')).sort();
  const problems: Problem[] = [];
  for (const file of files) {
    const raw = await readFile(path.join(directory, file), 'utf8');
    try {
      problems.push(parseProblem(JSON.parse(raw)));
    } catch (error) {
      throw new Error(
        `${file} の読み込みに失敗しました: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
  return problems;
}

async function main(): Promise<void> {
  const problems = await loadProblems(PROBLEMS_DIR);
  if (problems.length === 0) {
    console.log(`問題がありません: ${PROBLEMS_DIR}`);
    return;
  }

  const dataset = buildDataset(problems);
  await mkdir(BUILD_DIR, {recursive: true});
  await writeFile(path.join(BUILD_DIR, 'train.jsonl'), toJsonl(dataset.train));
  await writeFile(
    path.join(BUILD_DIR, 'validation.jsonl'),
    toJsonl(dataset.validation),
  );

  const {stats} = dataset;
  console.log(`問題: ${stats.total}件`);
  console.log(`  学習・検証に使用: ${stats.used}件`);
  console.log(`  テスト用に確保:   ${stats.test}件`);
  console.log(`  未レビューで除外: ${stats.skippedUnreviewed}件`);
  console.log(`  悪手が無く除外:   ${stats.skippedNoRejected}件`);
  console.log(`学習ペア: train ${stats.trainPairs}件 / validation ${stats.validationPairs}件`);
  console.log(`出力先: ${BUILD_DIR}`);
}

await main();
