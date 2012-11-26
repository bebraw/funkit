var suite = require('suite.js');
var f = require('funkit/string');

suite(f.title, [
    'foobar', 'Foobar',
    'foobar foobar', 'Foobar Foobar',
    'FOOBAR', 'Foobar'
]);
