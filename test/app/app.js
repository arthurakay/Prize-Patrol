Ext.regApplication({
    name : 'app',
    autoInitViewport : true,

    launch : function() {
        var jasmineEnv      = jasmine.getEnv(),
            trivialReporter = new jasmine.TrivialReporter();

        jasmineEnv.updateInterval = 1000;

        jasmineEnv.addReporter(trivialReporter);

        jasmineEnv.specFilter = function(spec) {
            return trivialReporter.specFilter(spec);
        };

        jasmineEnv.execute();
    }
});