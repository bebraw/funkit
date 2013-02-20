var annotate = require('annotate');
var is = require('is-js');
    function err(fn) {
        return function(e, d) {
            if(e) throw e;

            fn(d);
        };
    }

    module.exports = annotate('err', 'Wraps given function in Node-style error handler.')
        .on(is.fn, err);

