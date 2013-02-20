var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('sin', 'Returns the sine of a number')
        .on(is.number, Math.sin);

