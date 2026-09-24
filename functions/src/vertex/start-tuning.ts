/**
 * プリファレンスチューニングの実行コマンド。
 *
 *   npm run tune -- --label v1
 *
 * data/build/train.jsonl を GCS に上げ、チューニングジョブを投げる。
 * 事前に npm run dataset で学習データを作っておくこと。
 */

import {execFile} from 'node:child_process';
import {stat} from 'node:fs/promises';
import path from 'node:path';
import {promisify} from 'node:util';
import {GoogleGenAI} from '@google/genai';
import {buildTuningRequest, resolveTuningConfig} from './tuning.js';

const run = promisify(execFile);

const REPO_ROOT = path.resolve(import.meta.dirname, '../../..');
const BUILD_DIR = path.join(REPO_ROOT, 'data', 'build');

function option(name: string, fallback?: string): string | undefined {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? (process.argv[index + 1] ?? fallback) : fallback;
}

async function exists(file: string): Promise<boolean> {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

/** JSONL の行数＝学習ペア数。空ファイルを投げてしまう事故を防ぐ。 */
async function countLines(file: string): Promise<number> {
  const {readFile} = await import('node:fs/promises');
  const text = await readFile(file, 'utf8');
  return text.split('\n').filter((line) => line.trim().length > 0).length;
}

async function upload(local: string, remote: string): Promise<void> {
  console.log(`アップロード: ${path.basename(local)} → ${remote}`);
  await run('gcloud', ['storage', 'cp', local, remote]);
}

async function main(): Promise<void> {
  const config = resolveTuningConfig(process.env);
  const label = option('label', new Date().toISOString().slice(0, 10))!;

  const trainLocal = path.join(BUILD_DIR, 'train.jsonl');
  if (!(await exists(trainLocal))) {
    throw new Error(
      `${trainLocal} がありません。先に npm run dataset を実行してください`,
    );
  }
  const trainPairs = await countLines(trainLocal);
  if (trainPairs === 0) {
    throw new Error('学習データが空です');
  }

  const prefix = `${config.bucket}/datasets/${label}`;
  const trainingUri = `${prefix}/train.jsonl`;
  await upload(trainLocal, trainingUri);

  let validationUri: string | undefined;
  const validationLocal = path.join(BUILD_DIR, 'validation.jsonl');
  if ((await exists(validationLocal)) && (await countLines(validationLocal)) > 0) {
    validationUri = `${prefix}/validation.jsonl`;
    await upload(validationLocal, validationUri);
  }

  const request = buildTuningRequest({
    baseModel: config.baseModel,
    trainingUri,
    displayName: `nanikiru-${label}`,
    ...(validationUri ? {validationUri} : {}),
    ...(option('epochs') ? {epochCount: Number(option('epochs'))} : {}),
  });

  console.log(`学習ペア: ${trainPairs}件`);
  console.log(`土台モデル: ${config.baseModel}`);
  console.log(`手法: ${request.config.method}`);

  const client = new GoogleGenAI({
    vertexai: true,
    project: config.project,
    location: config.location,
  });
  const job = await client.tunings.tune(request as never);

  console.log('');
  console.log(`ジョブ名: ${job.name}`);
  console.log(`状態: ${job.state}`);
  console.log('');
  console.log(`進捗の確認: npm run tune:status -- ${job.name}`);
}

await main();
