var suite = require('suite.js');
var is = require('funkit/is');
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

        f.forEach(o, function(v) {
            found.push(v);
        });
    }
    if(is.object(o)) {
        found = {};

        f.forEach(o, function(k, v) {
            found[k] = v;
        });
    }

    return ops.equals(o, found);
}
