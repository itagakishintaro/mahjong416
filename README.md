# mahjong416

麻雀のスコア管理Webアプリ。対局結果を記録し、成績・統計・称号を集計して表示する。

## 機能

### スコア管理（既存）

- **スコア計算** — 四人麻雀・三人麻雀の対局結果を入力して収支を計算する。チョンボ・役満の加減算に対応
- **今日の成績** — 当日の対局一覧と収支。ゲームの全項目（プレイヤー・得点・日付）を後から編集できる
- **全体統計** — 通算の成績集計
- **個人成績** — プレイヤーごとの成績推移をグラフ表示
- **称号・実績** — 集計結果から称号を判定して表示
- **対面統計** — プレイヤー同士の対戦成績
- **ルール管理** — 適用ルールの設定
- **PWA** — ホーム画面に追加して利用できる

### 何切るAI（開発中）

手牌と局面を入力すると、切るべき牌とその理由を提示する。設計は [nanikiru-ai-design-doc.md](./nanikiru-ai-design-doc.md) を参照。

- シャンテン数・受入枚数は自実装のソルバーで厳密に計算する（LLMに計算させない）
- 打牌の判断は、何切る問題300問を学習させた Gemini（プリファレンスチューニング）が担当する
- 入力: 局・自風・巡目・ドラ・手牌・自分の副露（捨て牌は対象外）
- 前提ルール: 半荘戦・Mリーグルール（赤あり、一発裏あり）

## 技術スタック

| 分類 | 技術 |
| --- | --- |
| フロントエンド | Lit 3 + TypeScript（Web Components） |
| UIコンポーネント | Material Web 1.2 |
| グラフ | Chart.js 4 |
| データベース | Firebase Firestore |
| バックエンドAPI | Cloud Functions (2nd gen) / TypeScript |
| LLM | Vertex AI Gemini 2.5 Flash（プリファレンスチューニング） |
| バンドル | Rollup + Terser |
| ユニットテスト | Vitest |
| ブラウザテスト | @web/test-runner |
| ホスティング | Firebase Hosting |

## アーキテクチャ

### コンポーネント構成

`mahjong-menu` がタブナビゲーションの親コンポーネントで、以下の子を持つ。

- `mahjong-calc` — スコア計算（四麻/三麻対応）
  - `mahjong-calc-chonbo` — チョンボ計算
  - `mahjong-calc-yakuman` — 役満計算
  - `mahjong-calc-date-and-key` — 日付・キー管理
- `mahjong-today` — 今日の成績
- `mahjong-stats` — 全体統計
- `mahjong-individual` — 個人成績（Chart.js）
- `mahjong-title` — 称号・実績
- `mahjong-versus` — 対面統計
- `mahjong-rule` — ルール管理

### データフロー

1. 各コンポーネントが Firestore（プロジェクト `mahjong416`）からデータを取得する
2. Firebase 設定は `src/firestore.ts` に集約
3. コアの型定義は `src/@types/index.d.ts`（`Result`, `GameInfo`, `Chonbo`, `Yakuman`）

何切るAIのみ、フロントエンドから Cloud Functions のAPIを呼ぶ構成を取る。推論ロジック・ソルバー・Vertex AI 呼び出しはすべてバックエンドに閉じる。

### ビルドフロー

1. `tsc` が `.js` / `.d.ts` / ソースマップを出力する
2. Rollup が複数エントリーポイントを `public/` にバンドルする
3. Terser で最小化（`__` プレフィックスのプライベートフィールドをプロパティマングル）

出力は `public/` に配置し、Firebase Hosting からサーブする。

### TypeScript設定

`strict: true` に加え、`noUnusedLocals` / `noUnusedParameters` / `noImplicitReturns` を有効にしている。

## ドキュメント

| ファイル | 役割 |
| --- | --- |
| [AGENTS.md](./AGENTS.md) | AI向けグラウンドルール + 参照マップ |
| [DEVELOPMENT.md](./DEVELOPMENT.md) | 開発手順・規約・インフラ操作 |
| [nanikiru-ai-design-doc.md](./nanikiru-ai-design-doc.md) | 何切るAIの設計書 |

## セットアップ

```bash
npm install
npm run serve   # http://localhost:8000
```

何切るAIのバックエンドは `functions/` 配下で独立した依存管理を持つ。

```bash
cd functions && npm install
npm test        # ユニットテスト（ウォッチは npm run test:watch）
```

## ライセンス

[BSD-3-Clause](./LICENSE)（Lit starter テンプレート由来）
