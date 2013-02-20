var annotate = require('annotate');
var is = require('is-js');
    function between(a, min, max) {
        return min <= a && a <= max;
    }

    module.exports = annotate('between', 'Checks whether or not given bounds contain the given number, bounds included.')
        .on(is.number, is.number, is.number, between);

