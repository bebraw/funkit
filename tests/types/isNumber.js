var suite = require('suite.js');
var f = require('funkit/types');

suite(f.isNumber, [
    'foo', false,
    3, true,
    [], false,
    {}, false
]);
