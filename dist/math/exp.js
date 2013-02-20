var annotate = require('annotate');
var is = require('is-js');
    module.exports = annotate('exp', "Returns Ex, where x is the argument, and E is Euler's constant, the base of the natural logarithms")
        .on(is.number, Math.exp);

