var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('abs', 'Returns the absolute value (modulus) of a number')
        .on(is.number, Math.abs);

