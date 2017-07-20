#!/bin/bash

# Script that runs in the testing build stage of Travis and is responsible for testing
# the project in different Travis jobs.
# The script should immediately exit if any fails.

set -e

echo ""
echo "Building sources and running tests. Running mode: ${MODE}"
echo ""

# Go to project dir
cd $(dirname $0)/../..

# Include sources.
source scripts/ci/sources-mode.sh

function resolve(){
    eval echo \$$1
}

# Get commit diff
if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
  fileDiff=$(git diff --name-only $TRAVIS_COMMIT_RANGE)
else
  fileDiff=$(git diff --name-only $TRAVIS_BRANCH...HEAD)
fi

# Check if tests can be skipped
if [[ ${fileDiff} =~ ^(.*\.md\s*)*$ ]] && (is_e2e || is_unit); then
  echo "Skipping e2e and unit tests since only markdown files changed"
  exit 0
fi

if is_e2e; then
  echo "e2e tests!"
  exit 0
elif is_e2e_cits; then
  echo "running cits e2e tests"
  ng serve &
  TEST=$(resolve $TEST)
  CITS -run $TEST  -dont_launch_report -standalone_report -setEnv $citsEnv
  reportDir=$(CITS  $TEST -latest_exe_loc)
  CITS  $TEST -latest_exe_data_raw > report.json
  failed=$(CITS  $TEST -latest_exe nofailTests)
  echo "Reports (in $reportDir):"
  ls $reportDir
  if [ $failed -ne 0 ]; then
   (./fail $failed Test/s failed);
  fi

elif is_unit; then
  echo "unit tests!"
  ng test --watch=false
fi