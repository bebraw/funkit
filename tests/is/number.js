var suite = require('suite.js');
var is = require('funkit/is');

suite(is.number, [
    'foo', false,
    3, true,
    [], false,
    {}, false
]);
