var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/common');
var equals = require('funkit/ops/equals');

suite(f.deepcopy, suite.generate(1000,
    [g.structure],
    function(op, a) {
        return equals(a, op(a));
    })
);
