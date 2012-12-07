var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/math');

suite(f.randint, suite.generate(1000,
    [g.number(1000), g.number(1000)],
    function(op, a, b) {
        var res = op(a, b);
        return f.between(-1000, 1000, res);
    })
);
