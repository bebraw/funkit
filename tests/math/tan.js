var suite = require('suite.js');
var is = require('is-js');
var f = require('funkit/math');

suite(f.tan, function(op, a) {
    return is.number(op(a));
});
