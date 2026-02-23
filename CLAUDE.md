# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

麻雀スコア管理Webアプリ。Firebase Firestoreをバックエンドに、LitElementで構築したWeb Componentsで構成されている。

## コマンド

```bash
# 開発
npm run build           # TypeScriptコンパイル (src/ → dist/)
npm run build:watch     # ウォッチモードでコンパイル
npm run serve           # 開発サーバー起動 (localhost:8000)

# 本番ビルド・デプロイ
npm run build:deploy    # Rollupバンドル + HTMLコピー (dist/ → public/)
npm run checksize       # 最小化バンドルサイズ確認

# テスト
npm test                # 全テスト実行 (dev + prod)
npm run test:dev        # 開発モードテスト
npm run test:watch      # ウォッチモードテスト

# コード品質
npm run lint            # ESLint + lit-analyzer
npm run format          # Prettier整形

# クリーンアップ
npm run clean           # dist/ を削除
```

## アーキテクチャ

### コンポーネント構成

`mahjong-menu` がタブナビゲーションの親コンポーネントで、以下の子を持つ：

- `mahjong-calc` — スコア計算（四麻/三麻対応）
  - `mahjong-calc-chonbo` — チョンボ計算
  - `mahjong-calc-yakuman` — 役満計算
  - `mahjong-calc-date-and-key` — 日付・キー管理
- `mahjong-today` — 今日の成績
- `mahjong-stats` — 全体統計
- `mahjong-individual` — 個人成績（Chart.jsでグラフ表示）
- `mahjong-title` — 称号・実績
- `mahjong-versus` — 対面統計
- `mahjong-rule` — ルール管理

### データフロー

1. 各コンポーネントがFirebase Firestore（プロジェクト: mahjong416）からデータ取得
2. `src/firestore.ts` でFirebase設定を管理
3. `src/@types/index.d.ts` にコアの型定義（`Result`, `GameInfo`, `Chonbo`, `Yakuman`）

### ビルドフロー

1. `tsc` → `.js`, `.d.ts`, ソースマップを出力（ルートディレクトリ）
2. Rollupが複数エントリーポイントを `public/` にバンドル
3. Terserで最小化（`__` プレフィックスのプライベートフィールドをプロパティマングル）

出力ファイルは `public/` に配置し、Firebase Hostingからサーブする。

### 主要技術

| 技術 | 用途 |
|------|------|
| Lit 3.0 | Web Componentsフレームワーク |
| TypeScript ~5.3 | 言語（strict mode） |
| Firebase 10 | Firestoreデータベース・ホスティング |
| Chart.js 4 | グラフ描画 |
| Material Web 1.2 | UIコンポーネント |
| Rollup + Terser | バンドル・最小化 |

### TypeScript設定

`strict: true` に加え、`noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns` が有効。ts-lit-pluginによるLitテンプレートの型チェックも行われる。
