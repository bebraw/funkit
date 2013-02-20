var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('min', 'Returns the smallest of one or more numbers')
        .on(is.number, Math.min);

