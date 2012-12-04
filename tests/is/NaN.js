var suite = require('suite.js');
var is = require('funkit/is');

suite(is.NaN, [
    'foo', false,
    NaN, true
]);
