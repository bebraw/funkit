var suite = require('suite.js');
var f = require('funkit/math');

suite(f.round, function(op, a) {
    return f.between(op(a), a - 1, a + 1);
});
