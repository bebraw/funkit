var suite = require('suite.js');
var arr = require('funkit/array');
var f = require('funkit/math');

suite(f.between, function(op, val, a, b) {
    return op(val, a, b) == (arr.index(val, f.range(a, b + 1)) >= 0);
});
