var annotate = require('annotate');
var is = require('is-js');
    function zip(a, b) {
        var ret = [];
        var i, len;

        for(i = 0, len = Math.min(a.length, b.length); i < len; i++) {
            ret.push([a[i], b[i]]);
        }

        return ret;
    }

    module.exports = annotate('zip', 'Converts given arrays into a zip.')
        .on(is.array, is.array, zip);

