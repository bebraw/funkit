var suite = require('suite.js');
var f = require('funkit/ops');

suite(f.lte, [
    [3, 2], true,
    [3, 3], true,
    [2, 3], false
]);
