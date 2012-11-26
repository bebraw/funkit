var suite = require('suite.js');
var f = require('funkit/math');

suite(f.between, [
    [1, 2, 1], true,
    [100, 1000, 2], false
]);
