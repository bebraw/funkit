var suite = require('suite.js');
var ops = require('funkit/ops');
var f = require('funkit/functional');

suite(checkChain, [
    [[1, 5, 1]], 7
]);

function checkChain(a) {
    var _ = f.chain(f.map, f.filter, f.reduce);

    return _(a).reduce(ops.add).val();

    // XXX: problematic since map passes i to mul leading to val * i!
    // XXX: same problem with add!
    //var r = _(a).map(f.partial(ops.mul, 2));
    //r = r.filter(f.partial(ops.gt, 2))
    //return r.reduce(ops.add).val();
}
