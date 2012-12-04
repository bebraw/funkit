var suite = require('suite.js');
var f = require('funkit/ops');

suite(f.eq, [
    ['a', 'a'], true,
    [3, 3], true,
    [2, 3], false,
    ['a', 'b'], false,
    'a', false
]);
