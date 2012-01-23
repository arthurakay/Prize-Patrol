phantom.injectJs('../assets/PhantomLint.js');
PhantomLint.init({
    filepath : '../app/', //relative to current directory
    jsLint   : '../assets/jsLint.js'
});

//console.log('\n\n*** Starting unit test suite... ***\n\n');
//phantom.injectJs('UnitTests.js');
//UnitTester.init('tests.html');
//
//
//console.log('\n\n*** Starting integration test suite... ***\n\n');
//phantom.injectJs('IntegrationTests.js');
//IntegrationTester.init();