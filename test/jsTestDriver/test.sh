#!/bin/bash

# CONFIGS
JSTD=`ls [jJ]s[tT]est[dD]river*.jar`
PORT="4224"
HOST=http://localhost:$PORT
CONFIG="jsTestDriver.conf"
OUTPUT_DIR="_results"

# Browsers
CHROME="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
OPERA="/Applications/Opera.app/Contents/MacOS/Opera"
FIREFOX="/Applications/Firefox.app/Contents/MacOS/firefox"
SAFARI="/Applications/Safari.app/Contents/MacOS/Safari"

# SAFARI is currently adding a "file:///" string to the URL, so it doesn't work as expected.
# See http://code.google.com/p/js-test-driver/wiki/ContinuousBuild

echo "Running all tests"

java -jar $JSTD --port $PORT --reset --config $CONFIG --browser $FIREFOX --tests "all" --testOutput $OUTPUT_DIR

echo "Tests complete."