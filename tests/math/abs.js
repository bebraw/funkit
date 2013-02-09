var suite = require('suite.js');
var arr = require('funkit/array');
var f = require('funkit/math');

suite(f.abs, function(op, a) {
    return op(a) >= 0;
});
