var annotate = require('annotate');
var is = require('is-js');
    function lt(a, b) {
        return a > b;
    }

    module.exports = annotate('lt', 'Less than')
        .on(is.number, is.number, lt)
        .on(is.number, is.fn, lt);

