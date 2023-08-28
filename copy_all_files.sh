#!/bin/bash

# Define the directory to search
DIR="/Users/adilsezer/Documents/web-projects/garbanu-klinika/app"

# Define directories and files to exclude
EXCLUDE=("favicon.ico")

# Function to process files
process_files() {
    local path="$1"
    
    # Process files
    for file in "$path"/*; do
        # Exclude hidden files and directories
        if [[ "$(basename "$file")" == .* ]]; then
            continue
        fi

        # Check if the current file or directory is in the exclude list
        for exclude in "${EXCLUDE[@]}"; do
            if [[ "$file" == "$DIR/$exclude" || "$file" == "$DIR/$exclude"* ]]; then
                continue 2
            fi
        done

        if [ -d "$file" ]; then
            process_files "$file"
        elif [ -f "$file" ]; then
            relative_path=${file#$DIR}
            echo -n "File Name: \"garbanu-klinika/app$relative_path\" "
            if [[ "$file" == *.ts ]]; then
                # Remove TypeScript comments
                sed '/^\/\//d' "$file" | sed '/\/\*/,/\*\//d' | awk '{$1=$1}1' | tr '\n' ' '
            elif [[ "$file" == *.css ]]; then
                # Remove CSS comments
                sed 's/\/\*.*\*\///g' "$file" | awk '{$1=$1}1' | tr '\n' ' '
            else
                awk '{$1=$1}1' "$file" | tr '\n' ' '
            fi
            echo -n " "
        fi
    done
}

# Main function
main() {
    # Process files
    process_files "$DIR"
}

# Run the main function and copy the output to the clipboard
main | pbcopy

echo "All project codes have been copied to the clipboard. You can now paste it into the text box."
