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
  if (report.answerIsBest) {
    const tied = report.candidates.filter(
      (candidate) =>
        candidate.discard !== report.answer.discard &&
        candidate.shanten === report.answer.shanten &&
        candidate.ukeireTotal === report.answer.ukeireTotal,
    );
    console.log(
      tied.length === 0
        ? '正解はソルバー上の最良手と一致します'
        : `正解は最良手と同等です（同じ受入の打牌: ${tied.map(({discard}) => discard).join(' ')}）`,
    );
  } else {
    console.log(
      '正解はソルバー上の最良手ではありません（打点や場況の判断が理由として必要です）',
    );
  }

  console.log();
  console.log('## 学習データで使われる悪手');
  if (report.rejected === undefined) {
    console.log('打牌候補が正解しか無いため、悪手を作れません（学習データから除外されます）');
  } else {
    console.log(`打牌: ${report.rejected.discard}`);
    console.log(`理由: ${report.rejected.reason}`);
  }
}

await main();
