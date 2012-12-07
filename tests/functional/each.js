var suite = require('suite.js');
var is = require('is-js');
var ops = require('funkit/ops');
var f = require('funkit/functional');

suite(checkForEach, [
    [[1, 2, 3]], true,
    {a: 'b', b: 23, c: 'foo'}, true
]);

function checkForEach(o) {
    var found;

    if(is.array(o)) {
        found = [];

        f.each(function(v) {
            found.push(v);
        }, o);
    }
    else if(is.object(o)) {
        found = {};

        f.each(function(k, v) {
            found[k] = v;
        }, o);
    }

    return ops.equals(o, found);
}
