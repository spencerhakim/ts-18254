#!/bin/bash
set -e

# 1. Clean intermediate and output dirs
rm -rf ./dist/* ./build/*

# 2. Copy (almost) everything to intermediate dir
rsync -a ./src/* ./build --exclude="*.ts"

# 3. Compile source *.ts into intermediate *.js files
tsc -p ./

# 4. Compile source and intermediate *.js files into final output *.js files
babel ./src -Dd ./dist --source-maps
echo Done
