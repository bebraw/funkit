var suite = require('suite.js');
var f = require('funkit/math');

suite(f.ceil, function(op, a) {
    return f.between(op(a), a, a + 1);
});
