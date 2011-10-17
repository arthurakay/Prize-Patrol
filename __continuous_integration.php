<?php

/*
 * MAKE SURE IT'S GitHub, not someone else!
 * http://help.github.com/post-receive-hooks/
 */


/*
 * Grab the latest code from MASTER
 */
    $command = 'cd ./XYZ; git checkout -f; git pull;';
    echo exec($command);


/*
 * Run the Unit Tests
 */
    $command = 'cd ./test/jsTestDriver; sh test.sh;';
    echo exec($command);

 /*
  * Inspect the Results
  */


/**
 * Send an email/alert if any tests fail
 */

 
?>