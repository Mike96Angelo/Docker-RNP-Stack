#!/bin/bash
docker-compose \
  -f docker-compose.yml \
  -f docker-compose.db-migrate.yml \
  build

docker-compose \
  -f docker-compose.yml \
  -f docker-compose.db-migrate.yml \
  run db-migrate $@