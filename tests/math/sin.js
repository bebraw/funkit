var suite = require('suite.js');
var f = require('funkit/math');

suite(f.sin, function(op, a) {
    return f.between(op(a), -1, 1);
});
