var suite = require('suite.js');
var f = require('funkit');

suite(f.partial(f.string.rtrim, ' r'), [
    'foobar', 'fooba',
    'foobar ', 'fooba',
    'batbat', 'batbat'
]);
