#!/bin/bash
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$BASE_DIR/app"
[ ! -d "$APP_DIR" ] && { echo "The app directory does not exist in the current location."; exit 1; }
process_file() { local RELATIVE_PATH=${1#"$BASE_DIR/"}; echo "===== $RELATIVE_PATH ====="; cat "$1"; }
export -f process_file
find "$APP_DIR" -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" \) -exec bash -c 'process_file "$0"' {} \; | pbcopy
echo "Content of specific files in $APP_DIR and its subdirectories copied to clipboard!"
