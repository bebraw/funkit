var annotate = require('annotate');
var is = require('is-js');
    function last(a) {
        return a[a.length - 1];
    }

    module.exports = annotate('last', 'Returns the last item of an array')
        .on(is.array, last);

