#!/bin/bash

set -e

# sets and optionally prints environmental variable
# usage: setEnvVar variableName variableValue
function  setEnvVar() {
  local name=$1
  local value=$2

  if [[ ${print} == "print" ]]; then
    echo ${name}=${value}
  fi
  export ${name}="${value}"
}

setEnvVar CHROME_DRIVER_BIN $HOME/bin/chromedriver
setEnvVar CHROME_BIN google-chrome-stable
setEnvVar citsEnv "driver.ChromeDriverPath=$CHROME_DRIVER_BIN;user.gh.token=$GITHUB_TOKEN;user.gh.url=http://127.0.0.1:8080"

setEnvVar projectBing "$workingDir/test/cits/Projects/gh-stats-e2e"
setEnvVar smoke "-project_location $projectBing -release next -testset smoke"
setEnvVar layout "-project_location $projectBing -release next -testset layout"