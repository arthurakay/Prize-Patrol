UnitTester = {

    init : function(url) {
        var me   = this,
            page = new WebPage();

        // Route "console.log()" calls from within the Page context to the main Phantom context (i.e. current "this")
        page.onConsoleMessage = function(msg) {
            console.log(msg);
        };

        page.open(url, function(status){
            if (status !== "success") {
                console.log("Unable to access network");
                phantom.exit(1);
            }
            else {
                me.waitFor(
                    function() {
                        return page.evaluate(function(){
                            if (document.body.querySelector('.finished-at')) {
                                return true;
                            }
                            return false;
                        });
                    },

                    function() {
                        var failures = page.evaluate(function(){
                            console.log('\n\n' + document.body.querySelector('.description').innerText);

                            var failedSuites = document.body.querySelectorAll('div.jasmine_reporter > div.suite.failed');

                            for (i = 0; i < failedSuites.length; ++i) {
                                var el     = failedSuites[i],
                                    spec   = el.querySelector('.spec.failed'),
                                    desc   = spec.querySelector('.description'),
                                    msg    = spec.querySelector('.resultMessage.fail'),
                                    stack  = spec.querySelector('.stackTrace'); // <-- WTF is this null?

                                console.log('\n== Error in suite: ' + spec.previousElementSibling.innerText + ' ==');
                                if (desc) {
                                    console.log('Description:\n    - ' + desc.innerText + '\n');
                                }
                                if (msg) {
                                    console.log('Failure Message:\n    - ' + msg.innerText + '\n');
                                }
                                if (stack) {
                                    console.log('Stack Trace:\n    - ' + stack.innerText + '\n');
                                }
                            }

                            return failedSuites.length;
                        });
                        phantom.exit(failures);
                    },

                    3000
                );
            }
        });
    },

    /**
     * Wait until the test condition is true or a timeout occurs. Useful for waiting
     * on a server response or for a ui change (fadeIn, etc.) to occur.
     *
     * @param testFx javascript condition that evaluates to a boolean,
     * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
     * as a callback function.
     * @param onReady what to do when testFx condition is fulfilled,
     * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
     * as a callback function.
     * @param timeOutMillis the max amount of time to wait. If not specified, 3 sec is used.
     */
    waitFor : function (testFx, onReady, timeOutMillis) {
        var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3001, //< Default Max Timeout is 3s
            start            = new Date().getTime(),
            condition        = false,
            interval         = setInterval(function() {
                if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                    // If not time-out yet and condition not yet fulfilled
                    condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
                }
                else {
                    if(!condition) {
                        // If condition still not fulfilled (timeout but condition is 'false')
                        console.log("'waitFor()' timeout");
                        phantom.exit(1);
                    }
                    else {
                        // Condition fulfilled (timeout and/or condition is 'true')
                        console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                        typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                        clearInterval(interval); //< Stop this interval
                    }
                }
            }, 100); //< repeat check every 250ms
    }

};