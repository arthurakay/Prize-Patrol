var config = {
    filepath : '../app/' //relative to current directory
};
phantom.injectJs('../assets/PhantomLint.js');
PhantomLint.init(config);

//console.log('\n\n*** Starting unit test suite... ***\n\n');
//phantom.injectJs('UnitTests.js');
//UnitTester.init('tests.html');
//
//
//console.log('\n\n*** Starting integration test suite... ***\n\n');
//phantom.injectJs('IntegrationTests.js');
//IntegrationTester.init();