var suite = require('suite.js');
var f = require('funkit/types');

suite(f.isDefined, [
    'foo', true,
    undefined, false,
    false, true,
    null, true
]);
