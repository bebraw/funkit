var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('round', 'Returns the value of a number rounded to the nearest integer')
        .on(is.number, Math.round);

