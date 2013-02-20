var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('acos', 'Returns the arccosine (in radians) of a number')
        .on(function(a) {
            return is.number(a) && -1 <= a && a <= 1;
        }, Math.acos);

