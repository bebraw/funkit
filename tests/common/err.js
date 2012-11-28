var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var noop = require('funkit/functional/noop');
var f = require('funkit/common');

var AssertionError = require('assert').AssertionError;

var fn = f.err(noop);

suite(partial(fn, AssertionError), [
    'foo', suite.exception(AssertionError)
]);
