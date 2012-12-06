var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var f = require('funkit/common');

function add(a, b) {
    return a + b;
}

var addNumbers = f.annotate(add, Number, Number);

suite(partial(getMeta, addNumbers), [
    '_doc', undefined,
    '_invariants', [Number, Number]
]);

var addStrings = f.annotate(add, String, String, 'Appends two strings');

suite(partial(getMeta, addStrings), [
    '_doc', 'Appends two strings',
    '_invariants', [String, String]
]);

function getMeta(fn, name) {
    return fn[name];
}
