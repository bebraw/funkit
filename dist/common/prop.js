var annotate = require('annotate');
var is = require('is-js');
var functional = require('../functional');
    module.exports = annotate('prop', 'Returns a function that gets given property')
        .on(is.string, function(name) {
            return function(o) {
                return o[name];
            };
        });

