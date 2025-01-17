#!/bin/bash

# Author: Kor Dwarshuis
# Created: 2023-08-11 
# Updated: -
# Description: This script backups directories related to scraping and indexing in Typesense to a timestamped directory in the KERISSE_BACKUPS_DIR directory. The name of the directory containing the backups is the timestamp of the backup.

# Load environment variables from .env file
source .env

# Logger generates a log file with a timestamp and from which file the message comes from.
source ./${SEARCH_INDEX_DIR}/logger.sh

# Check if KERISSE_BACKUPS_DIR is set
if [ -z "$KERISSE_BACKUPS_DIR" ]; then
    setLogFile "error.log"
    log "KERISSE_BACKUPS_DIR is not set in the .env file."
    exit 1
fi

# Create a human-readable timestamp
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

# Define the destination backup directory with timestamp
BACKUP_DIR="${KERISSE_BACKUPS_DIR}${TIMESTAMP}"

# Check and create the backup directory
mkdir -p "$BACKUP_DIR"

# List of directories to backup
declare -a dirsToBackup=("${SEARCH_INDEX_DIR}/logs" "${SEARCH_INDEX_DIR}/search-index-entries" "${SEARCH_INDEX_DIR}/sitemaps" "docs/${OVERVIEW_DIR}")

for dir in "${dirsToBackup[@]}"; do
    SOURCE_DIR="${dir}"
    if [ -d "$SOURCE_DIR" ]; then
        # Copy directory to backup location
        cp -r "$SOURCE_DIR" "$BACKUP_DIR"
        
        
    else
        setLogFile "error.log"
        log "Warning: Directory $SOURCE_DIR does not exist."
    fi
done

setLogFile "success.log"
log "Backup completed to $BACKUP_DIR"
