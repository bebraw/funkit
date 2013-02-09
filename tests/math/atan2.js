var suite = require('suite.js');
var is = require('is-js');
var f = require('funkit/math');

suite(f.atan2, function(op, y, x) {
    return is.number(op(y, x));
});
