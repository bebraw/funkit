var suite = require('suite.js');
var f = require('funkit');

suite(f.partial(f.string.ltrim, ' f'), [
    'foobar', 'oobar',
    ' moobar', 'moobar',
    ' foobar', 'oobar',
    'something', 'something'
]);
