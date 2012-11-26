var suite = require('suite.js');
var f = require('funkit/math');

suite(f.range, [
    [3], [0, 1, 2],
    [1, 5], [1, 2, 3, 4],
    [1, 10, 2], [1, 3, 5, 7, 9],
    [1, 10, -2], []
]);
