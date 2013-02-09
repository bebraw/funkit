var suite = require('suite.js');
var is = require('is-js');
var arr = require('funkit/array');
var f = require('funkit/math');

suite(f.atan2, function(op, y, x) {
    return is.number(op(y, x));
});
