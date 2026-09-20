/**
 * 問題マスタの確認コマンド。
 *
 *   npm run check -- ../data/problems/0001.json
 *
 * バリデーションを通し、ソルバーの計算結果と悪手候補を表示する。
 * データ入力スキルはこの出力を使い、枚数や受入を自分で数えない。
 */

import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {parseProblem} from './problem.js';
import {buildProblemReport, type CandidateReport} from './report.js';

const KIND_LABEL = {
  'shanten-back': 'シャンテン戻し',
  'ukeire-loss': '受入大幅減',
  'value-loss': '打点放棄',
  'honor-misuse': '字牌の誤処理',
} as const;

function line(report: CandidateReport): string {
  const breakdown = report.ukeire === '' ? '' : `（${report.ukeire}）`;
  return `${report.discard}: ${report.shanten}シャンテン 受入${report.ukeireTotal}枚${breakdown}`;
}

async function main(): Promise<void> {
  const target = process.argv[2];
  if (target === undefined) {
    console.error('使い方: npm run check -- <問題ファイルのパス>');
    process.exitCode = 1;
    return;
  }

  const raw = await readFile(path.resolve(target), 'utf8');
  const report = buildProblemReport(parseProblem(JSON.parse(raw)));

  console.log(`# ${report.id}`);
  console.log();
  console.log(report.situation);
  console.log();
  console.log('## 検証');
  console.log(`正解: ${line(report.answer)}`);
  console.log(`最良: ${line(report.best)}`);
  console.log(
    report.answerIsBest
      ? '正解はソルバー上の最良手と一致します'
      : '正解はソルバー上の最良手ではありません（打点や場況の判断が理由として必要です）',
  );

  if (report.suggestedRejected.length > 0) {
    console.log();
    console.log('## 悪手の候補（rejected 未記入のため提案）');
    for (const suggestion of report.suggestedRejected) {
      console.log(`- [${KIND_LABEL[suggestion.kind]}] ${line(suggestion)}`);
    }
  }
}

await main();
