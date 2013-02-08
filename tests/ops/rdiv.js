var suite = require('suite.js');
var f = require('funkit/ops');

suite(f.rdiv, [
    3, 3,
    [2, 10], 5,
    [2, 20, 2], 10
]);
