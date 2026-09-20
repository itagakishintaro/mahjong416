# AGENTS.md

麻雀スコア管理Webアプリ `mahjong416`。Lit 3 + TypeScript の Web Components を Firebase Hosting でサーブし、Firestore をバックエンドにする。
現在は「何切るAI」機能（Vertex AI Gemini のプリファレンスチューニング）を追加開発中。

## ルール

1. 不明点は推測せず、必ずユーザーに質問して確認してから作業する
2. 作業単位ごとにユーザーのレビューを受け、コミットしてから次に進む。**1コミット1作業単位**を守り、複数の作業をまとめない
3. **何切るAIの開発は `feature/nanikiru-ai` ブランチで行う。main に直接コミットしない**。既存アプリの修正・ドキュメントやハーネスの変更は main へ直接コミットしてよい（[DEVELOPMENT.md](./DEVELOPMENT.md)「ブランチ運用」）
4. **TDD**で進める: 仕様確認 → ユニットテスト作成(Red) → プロダクションコード実装(Green) → リファクタリング
5. テストが通らない状態でコミットしない。既存テストを壊した場合は必ず直してから進む
6. 既存機能（`src/` 配下の既存コンポーネント）には**手を入れない**。何切るAIの追加は `functions/` `data/` と新規コンポーネントに隔離する
7. 秘密情報・APIキーはコードに書かない。GCPの認証はサービスアカウント経由とし、クライアントに認証情報を渡さない
8. 設計から外れる実装をしたくなった場合、先に `nanikiru-ai-design-doc.md` を更新してユーザーの承認を得る
9. ドキュメント・コード・回答はすべて「必要十分で情報は多いが無駄のないシンプルな記述」にする。メタな説明や重複を書かない
10. 麻雀の計算（シャンテン数・受入枚数・牌の枚数）を**LLMの推論で代替しない**。必ず `functions/src/solver/` の関数を呼ぶ

## 参照

| 状況 | 参照先 |
| --- | --- |
| **作業の再開・現状把握・残タスク** | [HANDOFF.md](./HANDOFF.md) |
| 機能・仕様・技術スタック | [README.md](./README.md) |
| 何切るAIの設計（入出力仕様・データ形式・評価設計・フェーズ） | [nanikiru-ai-design-doc.md](./nanikiru-ai-design-doc.md) |
| 実装作業（開発サイクル、TDDの手順、テストの配置） | [DEVELOPMENT.md](./DEVELOPMENT.md)「開発サイクル」「テスト」 |
| git操作（ブランチ・commit・push・マージ） | [DEVELOPMENT.md](./DEVELOPMENT.md)「ブランチ運用」「コミット規約」 |
| デプロイ・Firebase・GCP | [DEVELOPMENT.md](./DEVELOPMENT.md)「デプロイ」「GCP / Vertex AI」 |
| 既存フロントエンドのコンポーネント構成・ビルドフロー | [README.md](./README.md)「アーキテクチャ」 |
| Claude Code の hook 等ハーネス設定 | [DEVELOPMENT.md](./DEVELOPMENT.md)「AI駆動開発のハーネス」 |
| 牌の表記法・入出力仕様 | [nanikiru-ai-design-doc.md](./nanikiru-ai-design-doc.md) §3 |
| 学習データのスキーマ・JSONL形式 | [nanikiru-ai-design-doc.md](./nanikiru-ai-design-doc.md) §6 |
| 評価指標・成功基準 | [nanikiru-ai-design-doc.md](./nanikiru-ai-design-doc.md) §1.3, §7 |

## ディレクトリの責務

| パス | 責務 | 変更方針 |
| --- | --- | --- |
| `src/` | 既存フロントエンド（Lit コンポーネント） | 既存ファイルは触らない。新規追加のみ |
| `functions/src/solver/` | シャンテン数・受入枚数の計算。**外部依存なしの純粋関数** | TDD必須。ここが全機能の土台 |
| `functions/src/api/` | HTTPハンドラ・入力バリデーション | |
| `functions/src/prompt/` | プロンプト構築・LLM出力のパース | |
| `functions/src/vertex/` | Vertex AI クライアント | |
| `functions/src/data/` | 問題マスタのスキーマ・悪手の抽出・学習データ生成 | |
| `functions/src/eval/` | 評価ハーネス（精度測定CLI） | |
| `data/problems/` | 何切る問題マスタ（1問1 JSON）。**正本なのでコミットする** | |
| `data/build/` | JSONL等の生成物 | gitignore |

## コマンド

```bash
# 既存フロントエンド
npm run build        # tsc (src/ → dist/)
npm run serve        # 開発サーバー (http://localhost:8000)
npm run lint         # ESLint
npm run format       # Prettier
npm run build:deploy # Rollupバンドル → public/

# 何切るAI（functions/）
npm run test:solver         # ソルバー等のユニットテスト (Vitest)
npm run test:solver:watch   # ウォッチモード（TDD中はこれを使う）
```

`functions/` 配下の作業は `cd functions` して `npm test` でも同じ。
