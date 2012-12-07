var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/math');

suite._amount = 1000;
suite._generator = g.any;

// XXX: figure out why a and b are NaN always (improve any?)
suite(f.randint, function(op, a, b) {
    return !a || !b || f.between(a, b, op(a, b));
});
