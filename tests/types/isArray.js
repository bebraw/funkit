var suite = require('suite.js');
var f = require('funkit/types');

suite(f.isArray, [
    'foo', false,
    [[]], true,
    [[[], []]], true,
    {}, false
]);
