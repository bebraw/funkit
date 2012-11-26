var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var f = require('funkit/string');

suite(partial(f.trim, ' f'), [
    'foobar', 'oobar',
    ' foobar ', 'oobar',
    'batbat', 'batbat'
]);
