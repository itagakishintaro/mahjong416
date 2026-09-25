/**
 * 悪手の生成コマンド。
 *
 *   npm run gen-rejected              # rejected が空の問題すべて
 *   npm run gen-rejected -- 0011 0012 # 問題を指定
 *   npm run gen-rejected -- --force 0024 --exclude 9p
 *
 * ソルバー無しのモデルに答えさせ、結果を problems/*.json の rejected に
 * 書き込む。1問ごとに書き込むので、途中で止めても進んだ分は残る。
 *
 * 手動で rejected を指定済みの問題は既定で飛ばす。原典が許容手として
 * 挙げた打牌を避けるために選んだものがあるため（design doc §6.3）。
 */

import {readdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {parseProblem} from './problem.js';
import {generateAmateurRejected} from './amateur-rejected.js';
import {createModelClient, resolveModelConfig} from '../vertex/client.js';
import {formatTile} from '../solver/tile.js';

const REPO_ROOT = path.resolve(import.meta.dirname, '../../..');
const PROBLEMS_DIR = path.join(REPO_ROOT, 'data', 'problems');

function flag(name: string): boolean {
  return process.argv.includes(`--${name}`);
}

function optionList(name: string): string[] {
  const index = process.argv.indexOf(`--${name}`);
  if (index < 0) return [];
  const values: string[] = [];
  for (let i = index + 1; i < process.argv.length; i += 1) {
    const value = process.argv[i]!;
    if (value.startsWith('--')) break;
    values.push(value);
  }
  return values;
}

async function main(): Promise<void> {
  const force = flag('force');
  const exclude = optionList('exclude');
  const targets = process.argv
    .slice(2)
    .filter((arg) => /^\d{4}$/.test(arg));

  const files = (await readdir(PROBLEMS_DIR))
    .filter((name) => name.endsWith('.json'))
    .sort();
  const client = createModelClient(resolveModelConfig(process.env));

  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of files) {
    const id = path.basename(file, '.json');
    if (targets.length > 0 && !targets.includes(id)) continue;

    const full = path.join(PROBLEMS_DIR, file);
    const raw = JSON.parse(await readFile(full, 'utf8')) as Record<
      string,
      unknown
    >;
    const problem = parseProblem(raw);
    if (problem.rejected.length > 0 && !force) {
      skipped += 1;
      continue;
    }

    const answerDiscard = formatTile(problem.answer.discard);
    process.stdout.write(`${id}: `);
    const result = await generateAmateurRejected(
      problem.situation,
      answerDiscard,
      client,
      {
        onReject: (_attempt, problems) =>
          process.stdout.write(`[やり直し: ${problems.join(' / ')}] `),
      },
    );

    if (result === undefined) {
      console.log('採用できる答えが得られませんでした');
      failed += 1;
      continue;
    }
    if (exclude.includes(result.discard)) {
      console.log(`${result.discard} は除外指定のため採用しません`);
      failed += 1;
      continue;
    }

    raw['rejected'] = [{discard: result.discard, reason: result.reason}];
    await writeFile(full, `${JSON.stringify(raw, null, 2)}\n`);
    console.log(`打${result.discard} / ${result.reason.length}文字`);
    generated += 1;
  }

  console.log('');
  console.log(`生成: ${generated}問 / 見送り: ${failed}問 / 対象外: ${skipped}問`);
}

await main();
