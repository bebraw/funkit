var suite = require('suite.js');
var f = require('funkit/ops');

suite(f.gte, [
    [3, 2], false,
    [3, 3], true,
    [2, 3], true
]);
