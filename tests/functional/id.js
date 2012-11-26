var suite = require('suite.js');
var f = require('funkit/functional');

suite(f.id, [
    false, false,
    true, true,
    'a', 'a'
]);
