var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('atan', 'Returns the arctangent (in radians) of a number.')
        .on(is.number, Math.atan);

