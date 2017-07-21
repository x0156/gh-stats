#!/bin/bash

set -e

# Go to project/working directory
cd $(dirname $0)/../..

if [[ -z "$TRAVIS" ]]; then
  echo "Not Travis!"
  exit 1
fi

if [[ "${MODE}" ]]; then
  ./scripts/ci/travis-testing.sh
elif [[ "${DEPLOY_MODE}" ]]; then
  echo "nothing to deploy here"
fi