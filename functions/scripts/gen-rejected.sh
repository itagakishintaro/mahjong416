#!/bin/sh
# 悪手の生成。1問あたり数分かかるため、測定と同じくスリープを抑止する。
set -e
if command -v caffeinate > /dev/null 2>&1; then
  exec caffeinate -i -m node lib/data/gen-rejected.js "$@"
fi
exec node lib/data/gen-rejected.js "$@"
