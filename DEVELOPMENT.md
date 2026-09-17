# DEVELOPMENT.md

## リポジトリ・アカウント

- GitHub: 個人アカウント `itagakishintaro` / リポジトリ `itagakishintaro/mahjong416`
- push はSSHホストエイリアス `github.com-personal` 経由: `git@github.com-personal:itagakishintaro/mahjong416.git`
- git user: `itagakishintaro` / `itagaki.shintaro@gmail.com`（リポジトリローカル設定済み）
- Firebase / GCP プロジェクト: `mahjong416`（`.firebaserc` の default）

## 開発サイクル

**main直コミット運用**。Issue・PR・feature ブランチは使わない。代わりに**作業単位を小さく切り、1単位ごとにレビューとコミットを行う**ことで進行を管理する。

1. **作業単位の合意** — 着手前に「今回やること／やらないこと」をユーザーに提示して合意を取る
2. **仕様確認** — 不明点があればこの時点で質問する。推測で進めない
3. **Red** — ユニットテストを書く。この時点では落ちることを確認する
4. **Green** — プロダクションコードを実装し、テストを通す
5. **リファクタリング** — テストが通る状態を保ったまま整える
6. **レビュー依頼** — 変更点・確認手順・判断を仰ぎたい点を提示する
7. **コミット** — ユーザーの承認後に main へコミット＆push

### 作業単位の粒度

「テストが通る状態で止められる」最小単位にする。例:

- ❌ 「ソルバーを実装する」 — 大きすぎる
- ⭕️ 「牌の表記パースと正規化を実装する」「面子手のシャンテン数計算を実装する」「七対子・国士のシャンテン数計算を追加する」「受入枚数の計算を実装する」

## コミット規約

- [Conventional Commits](https://www.conventionalcommits.org/ja/)（`feat:` `fix:` `test:` `docs:` `chore:` `refactor:`）。本文は日本語
- スコープを付ける: `feat(solver):` `feat(nanikiru):` `docs(nanikiru):` `chore(harness):`
- コミット末尾に `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>` を付ける
- **テストが通る状態でコミットする**

## テスト

| 種類 | 対象 | 場所 | 実行 |
| --- | --- | --- | --- |
| ユニットテスト（Vitest） | ソルバー・プロンプト構築・パース・データ変換 | `functions/src/**/*.test.ts` | `npm run test:solver` |
| ブラウザテスト（@web/test-runner） | 既存 Lit コンポーネント | `src/test/` | `npm test` |

### TDDの進め方

```bash
npm run test:solver:watch   # ウォッチを起動したまま作業する
```

- **ソルバーは正解が一意に決まる**ため、期待値を先に書けるTDDが最も有効。既知の手牌とシャンテン数の対応を先にテストへ落とし込む
- テストケースは「正常系の代表 → 境界値 → 異常系」の順に足す。境界値の例: 副露4つで純手牌2枚、赤ドラ複数、同一牌4枚、和了形、国士無双
- `functions/src/solver/` は**外部依存を持たない純粋関数**に保つ。Vertex AI・Firestore・HTTPをここに混ぜない（テストが遅く不安定になる）
- LLMを呼ぶ処理（`vertex/`）はユニットテストの対象外。評価ハーネス（`eval/`）で実データに対して測る

### 評価ハーネス

精度の測定は専用CLIで行い、**数値を毎回同じ手順で比較できる状態**を保つ。

```bash
cd functions
npm run eval -- --model base          # 素のGemini（ソルバー結果なし）
npm run eval -- --model base+solver   # 素のGemini（ソルバー結果あり）
npm run eval -- --model tuned:<id>    # チューニング済みモデル
```

- 出力は厳格正解率・準最善一致率・悪手回答率・数値整合率と、**問題ごとの正誤一覧**
- テストセット（`data/problems/*.json` の `meta.split == "test"`）は**一度決めたら変更しない**。変えると過去の測定値と比較できなくなる
- 測定結果は日付・モデルID・データ件数とともに記録し、学習曲線を追えるようにする

## デプロイ

```bash
npm run build:deploy                      # Rollupバンドル → public/
npx firebase deploy --only hosting        # フロントエンド
npx firebase deploy --only functions      # バックエンドAPI
npx firebase deploy --only firestore:rules
```

CI/CD（GitHub Actions）は未設定。デプロイは手動。

## GCP / Vertex AI

- 既存の `mahjong416` プロジェクトを使用し、**Vertex AI API を追加で有効化**する
- 認証は Cloud Functions のサービスアカウント経由。**サービスアカウントキーをファイルとして持たない**（ADCを使う）
- ローカルからの実行は `gcloud auth application-default login` で取得した認証情報を使う
- チューニングジョブは時間と課金が発生する。**実行前に必ずユーザーの承認を得る**
- チューニング済みモデルのエンドポイントIDは設定値として外部化し、ハードコードしない

## AI駆動開発のハーネス

- `.claude/settings.json` — PostToolUse hook でファイル編集後に Prettier を自動適用（実体は `.claude/hooks/format.sh`。`node_modules` 未導入時は何もしない）
- `.claude/agents/` — `code-reviewer`（保守性レビュー）、`refactorer`（リファクタリング）
- Claude Code は Auto Mode で運用する
- `CLAUDE.md` は `AGENTS.md` へのシンボリックリンク。**編集するときは `AGENTS.md` を編集する**
- ドキュメントの分担（重複させない）:

| ファイル | 役割 |
| --- | --- |
| `AGENTS.md` | AI向けグラウンドルール + 参照マップ |
| `README.md` | 機能・仕様・技術スタック |
| `DEVELOPMENT.md` | 開発手順・規約・インフラ操作 |
| `nanikiru-ai-design-doc.md` | 何切るAIの設計書 |

## ドキュメント

- 設計変更時は `nanikiru-ai-design-doc.md` を必ず更新する。**実装が設計と食い違った状態を残さない**
- 設計上の判断が変わった場合は、doc の「未決事項」「解決済み」の表を更新する
