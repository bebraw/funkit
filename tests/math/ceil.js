var suite = require('suite.js');
var arr = require('funkit/array');
var f = require('funkit/math');

suite(f.ceil, function(op, a) {
    var res = op(a);

    return a <= res && res <= a + 1;
});
