#!/bin/bash
docker-compose build
docker-compose run --rm $@
