var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/math');

suite._amount = 1000;
suite._generator = g.any;

suite(f.randint, function(op, a, b) {
    var res = op(a, b);

    return !res || f.between(res, a, b);
});
