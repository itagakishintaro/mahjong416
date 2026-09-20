/**
 * 精度測定コマンド。
 *
 *   npm run eval                      # チューニング前（ソルバー結果あり）
 *   npm run eval -- --no-solver       # チューニング前（ソルバー結果なし）
 *   npm run eval -- --model <id>      # チューニング済みモデル
 *   npm run eval -- --split train     # 対象の split を変える（既定: test）
 *   npm run eval -- --limit 5         # 件数を絞る（お試し用）
 *   npm run eval -- --dir <path>      # 問題ディレクトリを変える（動作確認用）
 *
 * 1→2 の差がソルバー導入の効果、2→3 の差がチューニングの効果になる
 * （nanikiru-ai-design-doc.md §7.4）。
 */

import {readdir, readFile} from 'node:fs/promises';
import path from 'node:path';
import {runNanikiruForSituation} from '../api/nanikiru.js';
import {evaluateCandidates} from '../solver/candidates.js';
import {formatTile} from '../solver/tile.js';
import {nearBestDiscards, summarize, type Evaluation} from './metrics.js';
import {parseProblem, type Problem, type Split} from '../data/problem.js';
import {createModelClient, resolveModelConfig} from '../vertex/client.js';

const REPO_ROOT = path.resolve(import.meta.dirname, '../../..');
const PROBLEMS_DIR = path.join(REPO_ROOT, 'data', 'problems');

type Options = {
  readonly dir: string;
  readonly split: Split;
  readonly withSolver: boolean;
  readonly model: string | undefined;
  readonly limit: number | undefined;
};

function parseArgs(argv: readonly string[]): Options {
  const value = (flag: string): string | undefined => {
    const index = argv.indexOf(flag);
    return index >= 0 ? argv[index + 1] : undefined;
  };
  const split = (value('--split') ?? 'test') as Split;
  const limit = value('--limit');
  return {
    dir: value('--dir') ?? PROBLEMS_DIR,
    split,
    withSolver: !argv.includes('--no-solver'),
    model: value('--model'),
    limit: limit === undefined ? undefined : Number(limit),
  };
}

async function loadProblems(directory: string, split: Split): Promise<Problem[]> {
  let entries: string[];
  try {
    entries = await readdir(directory);
  } catch {
    return [];
  }
  const problems: Problem[] = [];
  for (const file of entries.filter((name) => name.endsWith('.json')).sort()) {
    const raw = await readFile(path.join(directory, file), 'utf8');
    const problem = parseProblem(JSON.parse(raw));
    if (problem.meta.split === split) {
      problems.push(problem);
    }
  }
  return problems;
}

function percent(rate: number): string {
  return `${(rate * 100).toFixed(1)}%`;
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const problems = (await loadProblems(options.dir, options.split)).slice(
    0,
    options.limit ?? Number.POSITIVE_INFINITY,
  );
  if (problems.length === 0) {
    console.log(`対象の問題がありません（split: ${options.split}）`);
    return;
  }

  const env = {...process.env};
  if (options.model !== undefined) {
    env['NANIKIRU_MODEL'] = options.model;
  }
  const config = resolveModelConfig(env);
  const client = createModelClient(config);

  console.log(`モデル: ${config.model}（${config.project} / ${config.location}）`);
  console.log(`ソルバー結果: ${options.withSolver ? 'あり' : 'なし'}`);
  console.log(`対象: ${problems.length}件（split: ${options.split}）`);
  console.log();

  const evaluations: Evaluation[] = [];
  for (const problem of problems) {
    const response = await runNanikiruForSituation(problem.situation, client, {
      withSolver: options.withSolver,
    });
    evaluations.push({
      problemId: problem.id,
      expected: formatTile(problem.answer.discard),
      actual: response.recommended.discard,
      rejected: problem.rejected.map(({discard}) => formatTile(discard)),
      nearBest: nearBestDiscards(evaluateCandidates(problem.situation.hand)),
      numbersConsistent: response.numbersConsistent,
    });
    process.stdout.write('.');
  }
  console.log('\n');

  const metrics = summarize(evaluations);
  console.log(`厳格正解率:   ${percent(metrics.strictAccuracy)}（${metrics.total}問中）`);
  console.log(`準最善一致率: ${percent(metrics.nearBestRate)}`);
  console.log(`悪手回答率:   ${percent(metrics.badDiscardRate)}`);
  console.log(`数値整合率:   ${percent(metrics.numberConsistencyRate)}`);

  if (metrics.misses.length > 0) {
    console.log();
    console.log('## 誤答');
    for (const miss of metrics.misses) {
      const tags = [
        miss.isRejected ? '悪手' : undefined,
        miss.isNearBest ? '牌効率は妥当' : undefined,
      ].filter((tag) => tag !== undefined);
      const suffix = tags.length > 0 ? `  [${tags.join(' / ')}]` : '';
      console.log(`- ${miss.problemId}: 正解 ${miss.expected} / 回答 ${miss.actual}${suffix}`);
    }
  }
}

await main();
