var suite = require('suite.js');
var f = require('funkit/operators');

suite(f.add, [
    3, 3,
    [3, 4], 7,
    [1, -4, 2], -1
]);
