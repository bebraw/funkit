var suite = require('suite.js');
var f = require('funkit/operators');

suite(f.gt, [
    [3, 2], false,
    [3, 3], false,
    [2, 3], true
]);
