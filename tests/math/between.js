var suite = require('suite.js');
var arr = require('funkit/array');
var f = require('funkit/math');

suite(f.between, function(op, a, b, val) {
    return op(a, b, val) == (arr.index(val, f.range(a, b + 1)) >= 0);
});
