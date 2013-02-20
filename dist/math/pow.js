var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('pow', 'Returns base to the exponent power, that is, base^exponent')
        .on(is.number, is.number, Math.pow);

