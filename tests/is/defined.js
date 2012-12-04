var suite = require('suite.js');
var is = require('funkit/is');

suite(is.defined, [
    'foo', true,
    undefined, false,
    false, true,
    null, true
]);
