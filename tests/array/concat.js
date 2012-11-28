var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/array');
var equals = require('funkit/operators/equals');

suite(f.concat, [
    [[1]], [1],
    [[[1]]], [1],
    [[['a', 'b', 'c'], [1, 2, 3]]], ['a', 'b', 'c', 1, 2, 3]
]);

suite(f.concat, suite.generate(10,
    [g.number(1000), g.array(10, g.character)],
    function(op, len, arr) {
        return equals(f.concat(f.chunk(len, arr)), arr);
    }
));
