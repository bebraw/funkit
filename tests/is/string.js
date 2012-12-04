var suite = require('suite.js');
var is = require('funkit/is');

suite(is.string, [
    'foo', true,
    3, false,
    [], false,
    {}, false
]);
