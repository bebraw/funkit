var annotate = require('annotate');
var is = require('is-js');
var each = require('./each');
    module.exports = annotate('reduce', 'Reduces using given callback')
        .on(is.fn, is.array, function(cb, o) {
            var ret = o[0];

            each(function(v) {
                ret = cb(ret, v);
            }, o.slice(1));

            return ret;
        });

