var suite = require('suite.js');
var types = require('funkit/types');
var ops = require('funkit/operators');
var f = require('funkit/functional');

suite(checkForEach, [
    [[1, 2, 3]], true,
    {a: 'b', b: 23, c: 'foo'}, true
]);

function checkForEach(o) {
    var found;

    if(types.isArray(o)) {
        found = [];

        f.forEach(o, function(v) {
            found.push(v);
        });
    }
    if(types.isObject(o)) {
        found = {};

        f.forEach(o, function(k, v) {
            found[k] = v;
        });
    }

    return ops.equals(o, found);
}
