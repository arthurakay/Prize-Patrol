(function() {
    var jasmineEnv          = jasmine.getEnv(),
        trivialReporter     = new jasmine.TrivialReporter(),
        currentWindowOnload = window.onload;

    jasmineEnv.updateInterval = 1000;

    jasmineEnv.addReporter(trivialReporter);

    jasmineEnv.specFilter = function(spec) {
        return trivialReporter.specFilter(spec);
    };

    function execJasmine() {
        jasmineEnv.execute();
    }

    window.onload = function() {
        if (currentWindowOnload) { currentWindowOnload(); }
        execJasmine();
    };

})();