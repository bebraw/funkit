var suite = require('suite.js');
var f = require('funkit/array');

suite(f.range, [
    0, [],
    1, [0],
    5, [0, 1, 2, 3, 4]
]);
