var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('ceil', 'Returns the smallest integer greater than or equal to a number')
        .on(is.number, Math.ceil);

