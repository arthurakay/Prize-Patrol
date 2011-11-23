clear

#Run JS Lint on all application files
../assets/phantomjs-1.3.0/bin/phantomjs JSLint.js

#Run integration tests
../assets/phantomjs-1.3.0/bin/phantomjs IntegrationTests.js

#Run Jasmine unit tests
../assets/phantomjs-1.3.0/bin/phantomjs ../assets/phantomjs-1.3.0/examples/run-jasmine.js http://prizepatrol.local/test/tests.html