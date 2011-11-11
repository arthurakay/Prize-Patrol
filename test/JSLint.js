var config = {
    filepath : '../app/'
};


var filesystem = require('fs'),
    JSLINT;


PhantomLint = {

    verbose  : true,
    fileTree : null,
    files    : [],

    jsLint   : '../assets/jslint.js',

    lintOptions : {
        nomen    : true, //if names may have dangling _
        plusplus : true, //if increment/decrement should be allowed
        sloppy   : true, //if the 'use strict'; pragma is optional
        vars     : true, //if multiple var statements per function should be allowed
        white    : true, //if sloppy whitespace is tolerated
        undef    : true  //if variables can be declared out of order
    },

    /**
     * @method
     * @param list
     */
    init : function() {
        console.log('JSLint? ' + phantom.injectJs(this.jsLint));
        if (!JSLINT) { phantom.exit(); }

        this.fileTree = this.getFiles(config.filepath);

        this.parseTree(this.fileTree, config.filepath);
        if (this.verbose) { console.log('Filesystem has been parsed. Looping through available files...'); }

        this.lintFiles();

        this.announceSuccess();
    },

    announceErrors: function() {
        console.log('\nFix Your Errors!\n\n');
        phantom.exit();
    },

    announceSuccess: function() {
        console.log('\nSuccessfully linted yo shit.\n\n');
        phantom.exit();
    },

    /**
     * 
     */
    getFiles : function(path) {
        var tree = filesystem.list(path);

        if (this.verbose) {
            console.log('FILES FOUND AT PATH:');
            console.log(tree);
        }

        return tree;
    },

    /**
     * @method
     * @param list
     */
    parseTree : function(list, path) {
        var x     = 0,
            regex = /.*\.js$/i,
            childPath, childTree;

        for (; x < list.length; x++) {
            if (filesystem.isFile(path + list[x])) {
                if (this.verbose) { console.log(list[x] + ' IS A FILE'); }
                /**
                 * We only want JS files
                 */
                if (regex.test(list[x])) {
                    this.files.push(path + list[x]);
                    if (this.verbose) { console.log(list[x] + ' IS A JS FILE. Added to the list.'); }
                }
                else {
                    if (this.verbose) { console.log(list[x] + ' IS NOT A JS FILE'); }
                }
            }
            else {
                if (this.verbose) { console.log(list[x] + ' IS NOT A FILE'); }

                /**
                 * If not a file
                 *   - check against parent paths
                 *   - recurse into child paths
                 */
                if (list[x] === '.' || list[x] === '..') {
                    if (this.verbose) { console.log(list[x] + ' IS A RELATIVE DIRECTORY PATH'); }
                }
                else {
                    childPath = path + list[x] + '/'
                    childTree = this.getFiles(childPath);
                    this.parseTree(childTree, childPath);
                }
            }
        }
    },

    /**
     * 
     */
    lintFiles : function() {
        var j = 0,
            file, js;

        /**
         * Loop through all files
         */
        for (; j < this.files.length; j++) {

            file = this.files[j];
            js   = filesystem.read(file);

            var i           = 0,
                result      = JSLINT(js, this.lintOptions),
                totalErrors = JSLINT.errors.length,
                error;

            if (!result) {
                for  (; i < totalErrors; i++)  {
                    error = JSLINT.errors[i];

                    if (error) {
                        /**
                         * Output error and stop
                         */
                        console.log(
                            [
                                file,
                                error.line,
                                error.character,
                                error.reason
                            ].join(':')
                        );
                        this.announceErrors();
                    }
                }
            }
        }
    }
};

PhantomLint.init();