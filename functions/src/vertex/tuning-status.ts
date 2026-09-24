/**
 * チューニングジョブの状態確認コマンド。
 *
 *   npm run tune:status -- projects/.../tuningJobs/123
 *
 * 引数を省くと直近のジョブを一覧する。
 */

import {GoogleGenAI} from '@google/genai';
import {resolveTuningConfig} from './tuning.js';

async function main(): Promise<void> {
  const config = resolveTuningConfig(process.env);
  const client = new GoogleGenAI({
    vertexai: true,
    project: config.project,
    location: config.location,
  });

  const name = process.argv.slice(2).find((arg) => arg.includes('tuningJobs/'));
  if (!name) {
    const jobs = await client.tunings.list({config: {pageSize: 10}});
    for await (const job of jobs) {
      console.log(`${job.state}\t${job.tunedModelDisplayName ?? '-'}\t${job.name}`);
    }
    return;
  }

  const job = await client.tunings.get({name});
  console.log(`状態: ${job.state}`);
  if (job.error) console.log(`エラー: ${JSON.stringify(job.error)}`);
  if (job.tunedModel?.endpoint) {
    console.log(`エンドポイント: ${job.tunedModel.endpoint}`);
    console.log('');
    console.log('測定するには:');
    console.log(`  NANIKIRU_MODEL=${job.tunedModel.endpoint} npm run eval -- --split test`);
  }
}

await main();
