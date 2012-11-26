var suite = require('suite.js');
var f = require('funkit/types');

suite(f.isNaN, [
    'foo', false,
    NaN, true
]);
