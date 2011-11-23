var config = {
    filepath : '../app/' //relative to current directory
};
phantom.injectJs('../assets/PhantomLint.js');
PhantomLint.init(config);