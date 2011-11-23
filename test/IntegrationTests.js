IntegrationTester = {
    init : function() {
        var page = new WebPage();

        page.open('../index.html', function(status) {

            window.setTimeout(function() {
                console.log('Snapshot: initial page load: index.png');
                page.render('_integrationTests/index.png');
                phantom.exit();
            }, 2000);

        });
    }
};

console.log('\n\n*** Starting integration test suite... ***\n\n');
IntegrationTester.init();