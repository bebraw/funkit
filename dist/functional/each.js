var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('each', 'Executes given `callback` on each item')
        .on(is.fn, is.array, function(cb, o) {
            var i, len;

            for(i = 0, len = o.length; i < len; i++) {
                var v = o[i];

                cb(v, i);
            }
        })
        .on(is.fn, is.object, function(cb, o) {
            var i = 0;
            var k;

            for(k in o) {
                cb(k, o[k], i);
                i++;
            }
        });

