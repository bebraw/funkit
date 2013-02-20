var annotate = require('annotate');
var is = require('is-js');
var each = require('./each');
    function ziptoo(a) {
        var ret = {};

        each(function(v) {
            ret[v[0]] = v[1];
        }, a);

        return ret;
    }

    module.exports = annotate('ziptoo', 'Converts given zip to object.')
        .on(is.array, ziptoo);

