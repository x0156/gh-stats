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

# Check if tests can be skipped
if [ "$SKIP_TESTS" = "true" ] && (is_e2e || is_unit || is_e2e_cits); then
  echo "Skipping e2e and unit tests"
  exit 0
fi

if is_e2e; then
  echo "e2e tests!"
  exit 0
elif is_e2e_cits; then
  echo "building app"
  ng build --prod > app_build_log.txt 2>&1
  npm run sw >> app_build_log.txt 2>&1
  echo "starting app server"
  http-server dist/ > app_server_log.txt 2>&1 &
  TEST=$(resolve $TEST)
  echo "running cits e2e tests"
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