var suite = require('suite.js');
var f = require('funkit');
var annotate = f.common.annotate;

function add(a, b) {
    return a + b;
}

var addNumbers = annotate(add, Number, Number);

suite(f.partial(getMeta, addNumbers), [
    '_doc', undefined,
    '_invariants', [Number, Number]
]);

var addStrings = annotate(add, String, String, 'Appends two strings');

suite(f.partial(getMeta, addStrings), [
    '_doc', 'Appends two strings',
    '_invariants', [String, String]
]);

function getMeta(fn, name) {
    return fn[name];
}
