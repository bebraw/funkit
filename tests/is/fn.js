var suite = require('suite.js');
var is = require('funkit/is');

suite(is.fn, [
    'foo', false,
    [], false,
    function() {}, true,
    {}, false
]);
