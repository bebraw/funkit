var annotate = require('annotate');
var is = require('is-js');
    function gte(a, b) {
        return a <= b;
    }

    module.exports = annotate('gte', 'Greater or equals than')
        .on(is.number, is.number, gte)
        .on(is.number, is.fn, gte);

