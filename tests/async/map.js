var assert = require('assert');
var suite = require('suite.js');
var f = require('funkit');
var is = require('is-js');

suite(suite.async(f.partial(f.async.map, getName)), [
    [['1', '2', '3']], ['1', '2', '3']
]);

function getName(name, done, i) {
    assert(is.number(i));
    done(null, name);
}
