#!/bin/bash
pg-migrate \
  --migrations-dir=/migrations \
  --db=$POSTGRES_DB \
  --host=$DB_HOST \
  --user=$POSTGRES_USER \
  --password=$POSTGRES_PASSWORD \
  $@