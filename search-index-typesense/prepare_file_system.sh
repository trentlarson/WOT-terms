#!/bin/bash


# Author: Kor Dwarshuis
# Created: 2023
# Updated: 2023-08-13
# Description: This script prepares the file system for the search-index-typesense project. It creates the necessary directories and files. It also removes the old files and directories. This script is meant to be run before the other scripts. 


# Set the directory path
dir_path="search-index-typesense"


### LOG FILES ###
# Check if a directory named "log" exists inside the path
if [ -d "${dir_path}/logs" ]; then
  # If the directory exists, delete it and everything inside
  rm -rf "${dir_path}/logs"
fi


# Create a new directory named "logs"
mkdir "${dir_path}/logs"

# Create files with the specified names
touch "${dir_path}/logs/error.log" "${dir_path}/logs/import-into-search-index.log" "${dir_path}/logs/scraped.log" "${dir_path}/logs/succes.log"


### SEARCH-INDEX-ENTRIES ###
if [ -d "${dir_path}/search-index-entries" ]; then
  rm -rf "${dir_path}/search-index-entries"
fi
mkdir "${dir_path}/search-index-entries"


### SITEMAPS ###
if [ -d "${dir_path}/sitemaps" ]; then
  rm -rf "${dir_path}/sitemaps"
fi
mkdir "${dir_path}/sitemaps"







### INDEXED-IN-KERISSE.MD ###
# Remove and recreate the index file where all the indexed websites are listed
rm -rf "$INDEX_OVERVIEW_FILE"
touch "$INDEX_OVERVIEW_FILE"
echo "## Indexed in KERISSE" > "$INDEX_OVERVIEW_FILE"
