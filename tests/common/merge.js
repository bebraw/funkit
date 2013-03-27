var suite = require('suite.js');
var f = require('funkit/common');

suite(f.merge, [
    [[1, 2, 3], [2, 3, 4]], [1, 2, 3, 2, 3, 4],
    [{a: 2}, {b: 5}], {a: 2, b: 5},
    [{a: 2, b: 3}, {b: 5}], {a: 2, b: 5},
    [{a: {b: 3}}, {a: {b: 10}}], {a: {b: 10}},
    [[1, 2, 3]], [1, 2, 3]
]);
