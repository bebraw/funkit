var suite = require('suite.js');
var f = require('funkit/ops');

suite(f.mul, [
    3, 3,
    [3, 4], 12,
    [1, -4], -4
]);
