var suite = require('suite.js');
var f = require('funkit/math');

suite(f.random, function(op) {
    return f.between(op(), 0, 1);
});
