var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('tan', 'Returns the tangent of a number')
        .on(is.number, Math.tan);

