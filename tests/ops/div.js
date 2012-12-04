var suite = require('suite.js');
var f = require('funkit/ops');

suite(f.div, [
    3, 3,
    [10, 2], 5,
    [20, 2, 2], 10
]);
