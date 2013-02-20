var suite = require('suite.js');
var f = require('funkit/math');

suite(f.sqrt, function(op, a) {
    return f.between(op(a), 0, a);
});
