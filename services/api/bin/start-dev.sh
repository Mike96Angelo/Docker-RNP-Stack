#!/usr/bin/env sh
set -ex

npx ts-node-dev \
  --cache-directory /app-cache/ts-cache \
  --respawn \
  --transpileOnly \
  --inspect=0.0.0.0:9229 \
  /app/src

wait
