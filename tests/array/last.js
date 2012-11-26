var suite = require('suite.js');
var f = require('funkit/array');

suite(f.last, [
    [[1, 2, 3, 4]], 4,
    [[]], undefined
]);
