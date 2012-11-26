var suite = require('suite.js');
var f = require('funkit/operators');

suite(f.lt, [
    [3, 2], true,
    [3, 3], false,
    [2, 3], false
]);
