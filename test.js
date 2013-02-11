#!/usr/bin/env node

var glob = require('glob');
var build = require('./build');

build.generateCJS(null, null, function() {
    build.lintAMD(null, function() {
        glob('./tests/**/*.js', function(err, files) {
            files.forEach(function(file) {
                require('.' + file.split('.').slice(0, -1).join(''));
            });
        });
    });
});
