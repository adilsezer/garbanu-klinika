#!/bin/bash

# Get the directory of the script
BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_DIR="$BASE_DIR/app"

# Check if the app directory exists
if [ ! -d "$APP_DIR" ]; then
  echo "The app directory does not exist in the current location."
  exit 1
fi

# Function to process each file
process_file() {
  local RELATIVE_PATH=${1#"$BASE_DIR/"}
  echo "===== $RELATIVE_PATH ====="
  cat "$1"
  echo -e "\n\n"
}

# Export the function so it's available to the subshell
export -f process_file

# Copy content of specific file types in the app directory and its subdirectories to clipboard
find "$APP_DIR" -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" \) -exec bash -c 'process_file "$0"' {} \; | pbcopy

echo "Content of specific files in $APP_DIR and its subdirectories copied to clipboard!"
