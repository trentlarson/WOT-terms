#!/bin/bash
# Purpose: Count presence per term of terms list matching a .md file
# Henk van Cann
# It generates two types of sidebar yml files for the Jekyll Documentation Theme
# One is a 2-level harmonica and the second type is a 1-level harmonica
# 2-level: all categories | 1-level: selected Category
# argument to the script: 'all' (2-level) or 'Cat_XXXX' where XXXX is one Cat
# ------------------------------------------
# Includes the usage function:
# source ./gen-usage.sh
# ------------------------------------------
# echo "bash version: "  $(bash --version)

USERNAME="$(id -un)"
DATETIME="$(date)"
INPUT="Count-workfile.txt"            # will be overridden
HEADER="Header-Count-workfile.txt"            # will be overridden
AWKOUTCNT="AWKOUTCNT-workfile.txt"          # will be overridden
MINLENGTHACRONYM="5"  #to invoke searches of acronyms only between whitespace and/or delimiting characters
# Some guidance of the output
BASEDIR=''   # Jekyll theme needs the yaml data in this dir
OUTCNTFILE="count.txt"          # resulting yml file trailer *wot_sidebar.yml
CATLIST=(9 10 11 12 13 14 15 16) # Order numbers of the columns in the WOT-terms-manage sheet: all categories 
INDEXARRAY=(1 4 6 8) # Order numbers of the content columns in the WOT-terms-manage sheet

# ------------------------------------------
if [ $# -lt 1 ]; then
  CATNAME="all"
  TERMSOURCE="Count-Wot-terms.txt"   # will stay in tact
  DOCNAME="hvancann-ietf-CESR-CHANGED.md" # Example file
fi   # lt 1

# Getopts handling or arguments handling

while [ ! -z "${1}" ]; do
    case $1 in
        --terms|-t)
            shift       # echo "You entered termsfile as: $1"           
            TERMSOURCE=${1}
            ;;
        --fuzzy|-f)
            shift       # echo "You entered fuzziness as: $1"           
            FUZZYTYPE=${1}
            ;;    
        --docname|-d)
            shift       # echo "You entered name as: $1"           
            DOCNAME=${1}
            ;;
        --column|-c)
            shift       # echo "You entered category as: $1"
            CATNAME=${1}
            ;;
        *)
            show_usage
            ;;
    esac
if [ $# -gt 0 ]; then
  shift
fi
done    # while loop getopts


cat ${TERMSOURCE} | tr -cd '\11\12\40-\176' > "${INPUT}" # want to get rid of non-printable character Excel leaves in the text export
cat ${INPUT} | sed -n '1p' > "${HEADER}" # create a file with the columns headers
cat ${INPUT} | sed '1d' > "${INPUT}" # create a file with only the data (no header)

string="$(cat ${HEADER})" # pull the header file into a string for testing presence of a header row
length=${#string}
if [  ${length} -eq 0 ]; then  # empty header string; construct unit tested
exit 1
fi    # if length = 0

declare -a COLS  # pull the file into an indexed array
#COLS=("$(cat ${HEADER} | tr ';' '\n')")  # New way of getting the column headers in an array: replace separator ; with \n and feed array
OIFS="$IFS"; IFS=';'; COLS=($(<${HEADER})); IFS="$OIFS"
# The -a option of read caused a lot of hassle: it was allowed in Vicual Studio Code, but not in bash 5.1.x on MAcOS
# IFS=';' read -ra COLS <<< "${string}"  # Column names in an array - OLD WAY
#for i in "${COLS[@]}"; do echo $i; done


# Verifying the existence of CATNAME in COLS array and we need the 
if [[ ${CATNAME} == "all" ]]; then
  COLUMNINDEX=999  # This means "all categories relevant"
else    # looking for a matching column name
  found='false'
  for i in "${!COLS[@]}"
    do
      if [[ "${COLS[$i]}" == "$CATNAME" ]] ; then
      let COLUMNINDEX=$i+1     # assigns the index number to use in AWK command of the first exactly matching column, following ignored
      found='true'
      CATLIST=($COLUMNINDEX)   # overwrite the CATLIST for we have found and matched a single selected Category
      fi  # found i
    done  # for loop
  if [[ "$found" == "false" ]]; then 
    echo "${CATNAME} not found in ${COLS[*]}"
    exit 1
  fi # found is false, CATNAME not in COLS
fi # CATNAME == all

# Filter the relevant terms (lines in the INPUT)
#####################################
# IMPORTANT In these AWK command, I haven't been able to make the column number variable :
#           Therefore Level column is fixed $8 
#           Therefore the Cat_XXXXX columns are fixed too: $9-$16
# We strip the number of records (rows) and field (columns) according to the arguments passed
# The Workfile INPUT will be overriden in the consequetive steps

if [ $COLUMNINDEX = "999" ]; then  # all categories
  INDEXARRAY=("${INDEXARRAY[@]}" "${CATLIST[@]}")
else  # one specific category selected
  INDEXARRAY=("${INDEXARRAY[@]}" "${CATLIST[@]}")
fi   # all cats or just one
# The fields array is initialized with the content record of the WOT-terms-sheet plus Category columns
for i in ${INDEXARRAY[@]}; do
    fields="$fields,\$$i"
done
fields=$( echo "$fields" | sed 's/^,//' ) # Remove the leading comma

# Below select the relevant records (terms) for the sheet and sort on second column of the output
# We want no empty keys: $4 represents the keyfield for this bashscript: it's the term used in the ToIP glossary
cat "${INPUT}" | awk -v levelNr=$LEVELNR 'BEGIN { FS=OFS=";" }  {if ($1 != "")  print $1,$4 }' > "${AWKOUTCNT}"
# 'Sort' explanation -> -t : the column delimiter in the pipe, -k2 : column 2 resulting from the pipe, on char 1-10, -b : ignore leading blanks in a field, -o : output file

FILENAME="./${BASEDIR}${CATNAME}_${OUTCNTFILE}"

function add_count_Rows (){
# Search words (or sub term) in a Term and add a row in a database for every hit > 0 with the same key, for later grouping and sum up
# type 1 (default): Example "A B C D" will be searched as "A B C D", "B C D", "C D", and "D", but also "ABCD", "ABC D", "B-C D", etc
# but not as any other compound combination
# type 2: Example "A B C D" will be searched as type 1 + "A", "A B", "A B C"                             
# type 3:  Example "A B C D" will be searched as type 2 and as "A D", "B C", "A C" and "B D"; all combination are possible, but not in a changed order.

        if  [ -z $1 ]; then
            local searchTerm=$Term          # set default value to global Term being processed  
        else 
            local searchTerm=$1             # searchTerm passed as an argument
        fi     # no arguments passed 

        if  [ -z $2 ]; then
            if [ -z $FUZZYTYPE ]; then
               local typeSearch=1        # default type of search
            fi  # no argument and no script argument passed     
            local typeSearch=$FUZZYTYPE      # type of search called in script
        else 
            local typeSearch=$1             # searchTerm passed as an argument to function
        fi     # no arguments passed 

        if [ ${#searchTerm} -lt $MINLENGTHACRONYM ]; then
            pattern="([.,;\(\[ ]+)${Term}([ .,;\)\]]?)"
            count=$( egrep -ci "${pattern}" ${DOCNAME})
            if [ count -gt "0" ]; then
              echo "${Key};${Term};${count};${pattern}" >> $FILENAME
            fi  # only add non-zero counts in the database
        else
            if [[ $(wc -w <<< $searchTerm) -gt 1 ]]; then # more than one word in a term
                # sed -r 's/([ ])/\[\1-\]\?/g' <<< $searchTerm     does the trick of the loop too
                patrn=""
                for j in $searchTerm; do
                    case $typeSearch in
                    -1|2)
                        patrn=$patrn"${j}[ -]?"
                    ;;
                    -3)
                        patrn=$patrn"[${j}]?[ -]?"
                    ;;
                    *)
                        echo "An INVALID type encountered: $typeSearch"
                        exit 2
                    ;;
                    esac  # type switch
                done   # looping j substring Term

                pattern="{$patrn}"

            else # just one word in a term
                pattern=${Term}  

            fi  #   more than one word in a term
            count=$( egrep -ci "${pattern}" ${DOCNAME})
            if [ count -gt "0" ]; then
              echo "${Key};${Term};${count};${pattern}" >> $FILENAME
            fi  # only add non-zero counts in the database
        fi # else if Term too short
    fi  # Term "" 

 #   echo "${Key};${Term};${count}" >> $FILENAME

} # end function add_count_Rows


# echo $FILENAME

# Start write to resulting txt file
echo "# This script automatically counts Terms in a guest file , with arguments" > $FILENAME
#echo "# DOCNAME: ${DOCNAME}, catname: ${CATNAME}"  >> $FILENAME 
#echo "# The code loops through the terms, searches the target text"  >> $FILENAME
#echo "# and provides the appropriate counts in an extra column." >> $FILENAME
#echo "# Generated running $(basename ${0}) located in $(dirname ${0}), by UID ${USERNAME} on ${DATETIME}." >> $FILENAME

#########################
# 1 Key - 2 Term - Count
#########################
[ ! -f $AWKOUTCNT ] && { echo "$AWKOUTCNT file not found"; exit 99; }
OLDIFS="$IFS"               # $IFS is a special shell variable in Bash
IFS=' '

while read Key Term
do
    Term=$( echo $Term |  sed -e 's/-/ /g' )  # remove preceding and trailing -
    Term=$( echo $Term | sed -e 's/[^ A-Za-z0-9_]//g')  # remove unwanted chars in term before search, leave spaces in (among other chars)!
    # Multifunctional splitting base and filename - got it from here: https://www.oncrashreboot.com/use-sed-to-split-path-into-filename-extension-and-directory
    # echo "/User/talha/content/images/README.example.md" | sed 's/\(.*\)\/\(.*\)\.\(.*\)$/\1\n\2\n\3/'

    if [ ${#Term} -eq 0 ]; then
        count="";pattern="";echo "${Key};${Term};${count};${pattern}" >> $FILENAME   # skip empty records, but leave the original record in tact
    fi # empty record

    # When a Term is a compound of words, we let the longest composition prevail, but we count particles from right to left too
    arrayWords=($(echo $Term | tr " " "\n"))
        #Print the split string
    numWords=${#arrayWords[@]}
    patrn=""
    #echo "numWords: $numWords"
    if [numWords -eq "1"]; then
      add_count_Rows $term $FUZZYTYPE
    fi # one word Term  
    
    case $typeSearch in
    -1) # Compose type 2: Example "A B C D" will be searched as type 1 + "A", "A B", "A B C"
        i=$numWords
        patrn=${arrayWords[$i]}
        while [! i -gt 0]; do
        patrn=$patrn"${i} "
        add_count_Rows $patrn $typeSearch
        let i+=1
        done
    ;;
    -2) # Compose type 2: Example "A B C D" will be searched as type 1 + "A", "A B", "A B C"                              
        j=1
        while [! j -ge $numWords]; do
            patrn=$patrn" ${j}"
            # echo "${arrayWords[$j]} ${arrayWords[$numWords]}"
            add_count_Rows $patrn 1
            add_count_Rows $patrn $typeSearch
            let j+=1
        done      
    ;;
    -3) # Compose type 3: Example "A B C D" will be searched as type 2 and as "A D", "B C", "A C" and "B D", "B", "C"; all combination are possible, but not in a changed order.
            add_count_Rows $Term 1
            add_count_Rows $Term 2
            add_count_Rows $Term $typeSearch
    ;;
    *)
        echo "An INVALID type encountered: $typeSearch"
        exit 2
    ;;
    esac  # type switch





    # 1 Key - 2 Term - 3 Count  
done <${AWKOUTCNT}  # for all records

IFS="$OLDIFS"   # $IFS is a special shell variable in Bash, set it back to the old value