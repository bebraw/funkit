var suite = require('suite.js');
var is = require('funkit/is');

suite(is.array, [
    'foo', false,
    [[]], true,
    [[[], []]], true,
    {}, false
]);