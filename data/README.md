# data/

何切るAIの学習データ。

| パス | 内容 |
| --- | --- |
| `problems/` | 問題マスタ（1問1ファイル、`NNNN.json`）。**正本なのでコミットする** |
| `build/` | 生成物（`train.jsonl` / `validation.jsonl`）。gitignore |

## 生成

```bash
cd functions && npm run dataset
```

`problems/*.json` を読み、`build/` に DPO 用の JSONL を書き出す。
`split` が `test` の問題、未レビュー（`reviewed: false`）の問題、悪手（`rejected`）が無い問題は学習に使われない。

## 問題マスタの形式

```json
{
  "id": "0001",
  "situation": {
    "round": "東1局",
    "seat": "南家",
    "turn": 7,
    "dora": ["5s"],
    "hand": ["1m","2m","3m","4m","5m","6m","7m","8m","9m","東","東","1p","2p"],
    "draw": "5s",
    "melds": []
  },
  "answer": {"discard": "5s", "reason": "5sは孤立牌で、切ってもテンパイが崩れない。"},
  "rejected": [{"discard": "東", "reason": "自風は重なれば役になるので先に払う必要はない。"}],
  "meta": {"split": "train", "source": "...", "createdAt": "2026-09-19", "reviewed": true}
}
```

- `hand` は**ツモ牌を含まない純手牌**。`draw` は副露直後のみ省略できる
- `rejected[].reason` は「**その打牌を選んでしまう典型的な誤った思考過程**」を書く（なぜ悪いかの説明ではない）
- `meta.split` は `train` / `validation` / `test`

仕様の詳細は [../nanikiru-ai-design-doc.md](../nanikiru-ai-design-doc.md) §3、§6 を参照。
