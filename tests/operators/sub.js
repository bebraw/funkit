var suite = require('suite.js');
var f = require('funkit/operators');

suite(f.sub, [
    3, 3,
    [3, 4], -1,
    [1, -4, 2], 3
]);
