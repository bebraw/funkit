var suite = require('suite.js');
var f = require('funkit');

var AssertionError = require('assert').AssertionError;

var fn = f.common.err(f.noop);

suite(f.partial(fn, AssertionError), [
    'foo', suite.exception(AssertionError)
]);
