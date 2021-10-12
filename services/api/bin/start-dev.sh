#!/usr/bin/env sh
set -ex

npx ts-node-dev \
  --cache-directory /app-cache/ts-cache \
  --respawn \
  --transpile-only \
  --inspect=0.0.0.0:9229 \
  /app/src

wait
