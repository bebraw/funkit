var annotate = require('annotate');
var is = require('is-js');
    function values(o) {
        var ret = [];

        for(var k in o) ret.push(o[k]);

        return ret;
    }

    module.exports = annotate('values', 'Returns values of the given object.')
        .on(is.object, values);

