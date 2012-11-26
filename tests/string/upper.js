var suite = require('suite.js');
var f = require('funkit/string');

suite(f.upper, [
    'Foobar', 'FOOBAR',
    'FOOBAR', 'FOOBAR',
    'foobar', 'FOOBAR'
]);
