IntegrationTester = {
    wait : function(millseconds) {
        var now    = new Date(),
            stopAt = now.getTime() + millseconds;

        while (now.getTime() <= stopAt) {
            now = new Date();
        }
    },

    init : function() {
        var me   = this
            page = new WebPage({
                viewportSize : {
                    width  : 480,
                    height : 600
                }
            });

        page.open('../index.html', function(status) {

            window.setTimeout(function() {
                me.runTests(page);
            }, 2000);

        });
    },

    runTests : function(page) {
        this.pageLoad(page);

        /**
         * run Contestant tests
         */
        //this.addContestant(page);
        this.clearContestants(page);

        /**
         * run Prize tests
         */
        page.evaluate(function() {
            var tabs = Ext.ComponentQuery.query('tabpanel')[0];
            tabs.setActiveItem(1);
        });
        console.log('Switching tabs in the UI... (5 sec)');
        this.wait(5000);
        this.clearPrizes(page);

        phantom.exit();
    },

    pageLoad: function(page) {
        console.log('Snapshot: initial page load: index.png');
        page.render('_integrationTests/index.png');
    },

    addContestant : function(page) {
        console.log('Snapshot: user clicks on "Add Contestant" button: addContestant.png');

        page.evaluate(function() {
            Ext.ControllerManager.get('app.controllers.Contestant').addContestant();
        });

        this.wait(2000);
        page.render('_integrationTests/addContestant.png');
    },

    clearContestants : function(page) {
        console.log('Snapshot: user clicks on "Clear Contestants" button: clearContestants.png');

        page.evaluate(function() {
            Ext.ControllerManager.get('app.controllers.Contestant').clearContestants();
        });

        this.wait(500);
        page.render('_integrationTests/clearContestants.png');
    },

    clearPrizes : function(page) {
        console.log('Snapshot: user clicks on "Clear Prizes" button: clearPrizes.png');

        page.evaluate(function() {
            Ext.ControllerManager.get('app.controllers.Prize').clearPrizes();
        });

        this.wait(500);
        page.render('_integrationTests/clearPrizes.png');
    }
};

console.log('\n\n*** Starting integration test suite... ***\n\n');
IntegrationTester.init();