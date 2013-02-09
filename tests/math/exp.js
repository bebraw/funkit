var suite = require('suite.js');
var f = require('funkit/math');

suite(f.exp, function(op, a) {
    return 0 <= op(a);
});
