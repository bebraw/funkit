var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var f = require('funkit/string');

suite(partial(f.rtrim, ' r'), [
    'foobar', 'fooba',
    'foobar ', 'fooba',
    'batbat', 'batbat'
]);
