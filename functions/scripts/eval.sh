#!/bin/sh
# 測定の実行。
#
# 測定は1問あたり約4分かかり、8問で30分を超える。途中でPCがスリープすると
# 通信が切れて測定が落ち、それまでの結果がすべて失われる。macOS では
# caffeinate でスリープを抑止してから実行する。
set -e

if command -v caffeinate > /dev/null 2>&1; then
  exec caffeinate -i -m node lib/eval/run-eval.js "$@"
fi
exec node lib/eval/run-eval.js "$@"
