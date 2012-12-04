var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var g = require('generators.js');
var f = require('funkit/array');
var equals = require('funkit/ops/equals');

suite(partial(f.chunk, 2), [
    [[]], [],
    [[1]], [[1]],
    [[1, 2, 3]], [[1, 2], [3]],
    [['a', 2, 'c']], [['a', 2], ['c']]
]);

// TODO: simplify using annotated data!
suite(f.chunk, suite.generate(1000,
    [g.number(1, 1000), g.array(10, g.character)],
    function(op, len, arr) {
        return equals(f.concat(op(len, arr)), arr);
    })
);
