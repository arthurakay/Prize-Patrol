#!/bin/bash
while getopts  "j:t:" flag
do
  if [ $flag == "j" ]; then
    JSTD=$OPTARG
  elif [ $flag == "t" ]; then
    TESTS=$OPTARG
  fi
done

if [ -z "$JSTD" ]; then
	JSTD=`ls [jJ]s[tT]est[dD]river*.jar`
fi

if [ -z "$TESTS" ]; then
  TESTS="all"
  echo "Running all tests"
else
  echo "Running '$TESTS'"
fi

FIREFOX=`which firefox`
if [ "$?" -eq 1 ];
then
    echo "Firefox not found."
    exit 1
fi

#java -jar $JSTD --reset --tests "$TESTS"
java -jar $JSTD --port "4224 --reset --tests "all" --config jsTestDriver.conf --browser $FIREFOX
