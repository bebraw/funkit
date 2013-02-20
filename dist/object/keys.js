var annotate = require('annotate');
var is = require('is-js');
    function keys(o) {
        return Object.keys(o);
    }

    module.exports = annotate('keys', 'Returns keys of the given object.')
        .on(is.object, keys);

