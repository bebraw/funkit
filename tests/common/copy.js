var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/common');
var equals = require('funkit/ops/equals');

suite(f.copy, [
    [String], String
]);

suite(f.copy, suite.generate(1000,
    [g.array(100, g.number(1000))],
    function(op, a) {
        return op(a) != a && equals(op(a), a);
    })
);

suite(f.copy, suite.generate(1000,
    [g.object(100, g.number(1000), g.number(1000))],
    function(op, a) {
        return op(a) != a && equals(op(a), a);
    })
);

suite(f.copy, suite.generate(1000,
    [g.character],
    function(op, a) {
        return op(a) == a && equals(op(a), a);
    })
);
