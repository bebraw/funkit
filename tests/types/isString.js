var suite = require('suite.js');
var f = require('funkit/types');

suite(f.isString, [
    'foo', true,
    3, false,
    [], false,
    {}, false
]);
