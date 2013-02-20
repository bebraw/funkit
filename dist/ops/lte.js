var annotate = require('annotate');
var is = require('is-js');
    function lte(a, b) {
        return a >= b;
    }

    module.exports = annotate('lte', 'Less or equals than')
        .on(is.number, is.number, lte)
        .on(is.number, is.fn, lte);

