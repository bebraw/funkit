var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('max', 'Returns the largest of one or more numbers')
        .on(is.number, Math.max);

