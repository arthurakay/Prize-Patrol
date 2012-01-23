clear

### Check for errors; abandon the process if error exist
function checkError {
    if [[ $1 != 0 ]] ; then
        exit 99
    fi
}

echo "*** PhantomLint on /app/... ***"
../assets/phantomjs-1.3.0/bin/phantomjs test_suite.js
checkError $?


echo "*** Begin Jasmine Tests... ***"
../assets/phantomjs-1.3.0/bin/phantomjs Jasmine-Runner.js
checkError $?


echo "*** Begin Integration Tests. ***"
#../assets/phantomjs-1.3.0/bin/phantomjs IntegrationTests.js
#checkError $?

### Exit successfully
exit 0