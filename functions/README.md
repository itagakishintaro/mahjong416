# functions/

何切るAIのバックエンド。既存フロントエンド（リポジトリルートの `package.json`）とは**独立した依存管理**を持つため、ルートのビルド・テストには影響しない。

```bash
npm install
npm test          # ユニットテスト
npm run test:watch # TDD中はこれ
```

ディレクトリの責務は [../AGENTS.md](../AGENTS.md)「ディレクトリの責務」、開発手順は [../DEVELOPMENT.md](../DEVELOPMENT.md)「テスト」を参照。
