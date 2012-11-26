var suite = require('suite.js');
var f = require('funkit/functional');

suite(f.count, [
    [[1, 2, 3]], 3,
    [[]], 0,
    [{}], 0,
    [{a: 1, b: 2}], 2
]);
