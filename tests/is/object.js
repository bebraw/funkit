var suite = require('suite.js');
var is = require('funkit/is');

suite(is.object, [
    'foo', false,
    [], false,
    {}, true,
    function() {}, false
]);
