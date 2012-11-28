var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/math');

suite(f.choose, suite.generate(1000,
    [g.array(100, g.number(1000))],
    function(op, a) {
        var ret = op(a);
        return f.between(-1000, 1000, ret) || !ret;
    })
);
