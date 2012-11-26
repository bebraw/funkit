var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var f = require('funkit/string');

suite(partial(f.ltrim, ' f'), [
    'foobar', 'oobar',
    ' moobar', 'moobar',
    ' foobar', 'oobar',
    'something', 'something'
]);
