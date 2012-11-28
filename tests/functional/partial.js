var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/functional');
var sum = require('funkit/operators/sum');

suite(sum, suite.generate(1000,
    [g.number(1000), g.number(1000)],
    function(op, a, b) {
        return op(a, b) == f.partial(op, a)(b);
    })
);
