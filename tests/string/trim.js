var suite = require('suite.js');
var f = require('funkit');

suite(f.partial(f.string.trim, ' f'), [
    'foobar', 'oobar',
    ' foobar ', 'oobar',
    'batbat', 'batbat'
]);
