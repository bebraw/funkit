var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/array');
var equals = require('funkit/ops/equals');

suite(f.concat, [
    [[1]], [1],
    [[[1]]], [1],
    [[['a', 'b', 'c'], [1, 2, 3]]], ['a', 'b', 'c', 1, 2, 3]
]);

suite(f.concat, function(op, arr) {
    return equals(f.concat(f.chunk(3, arr)), arr);
});
