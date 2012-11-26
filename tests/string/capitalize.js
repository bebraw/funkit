var suite = require('suite.js');
var f = require('funkit/string');

suite(f.capitalize, [
    'foobar', 'Foobar',
    'foobar foobar', 'Foobar foobar',
    'FOOBAR', 'Foobar'
]);
