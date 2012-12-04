var suite = require('suite.js');
var f = require('funkit/ops');

suite(f.sub, [
    3, 3,
    [3, 4], -1,
    [1, -4, 2], 5
]);
