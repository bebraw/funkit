var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('each', 'Executes given `callback` on each item')
        .on(is.fn, is.array, function(cb, o) {
            for(var i = 0, len = o.length; i < len; i++) {
                var v = o[i];

                cb(v, i);
            }
        })
        .on(is.fn, is.object, function(cb, o) {
            var i = 0;

            for(var k in o) {
                cb(k, o[k], i);
                i++;
            }
        });

