/**
 * テストセットの選定コマンド。
 *
 *   npm run pick-test -- --count 8 --seed nanikiru-v1
 *
 * 選ばれたIDを表示するだけで、ファイルは書き換えない。確保した後に
 * 入れ替えると評価が信用できなくなるため、反映は人の手で行う
 * （nanikiru-ai-design-doc.md §7.1）。
 */

import {readdir} from 'node:fs/promises';
import path from 'node:path';
import {selectTestIds} from './split.js';

const REPO_ROOT = path.resolve(import.meta.dirname, '../../..');
const PROBLEMS_DIR = path.join(REPO_ROOT, 'data', 'problems');

function option(name: string, fallback: string): string {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? (process.argv[index + 1] ?? fallback) : fallback;
}

async function main(): Promise<void> {
  const count = Number(option('count', '8'));
  const seed = option('seed', 'nanikiru-v1');

  const entries = await readdir(PROBLEMS_DIR);
  const ids = entries
    .filter((name) => name.endsWith('.json'))
    .map((name) => path.basename(name, '.json'));

  const picked = selectTestIds(ids, count, seed);
  console.log(`母数: ${ids.length}件 / シード: ${seed}`);
  console.log(`テストに確保: ${picked.length}件`);
  console.log(picked.join(' '));
}

await main();
