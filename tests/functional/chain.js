var suite = require('suite.js');
var f = require('funkit');
var fun = f.functional;
var ops = f.ops;
var chain = f.functional.chain;
var capitalize = f.string.capitalize;

suite(checkChain, [
    [[1, 5, 1]], 10
]);

function checkChain(a) {
    var _ = chain(fun.map, fun.filter, fun.reduce);

    return op(a, _);
}

suite(checkArrayChain, [
    [[1, 5, 1]], 10
]);

function checkArrayChain(a) {
    var _ = chain([fun.map, fun.filter, fun.reduce]);

    return op(a, _);
}

function op(a, _) {
    return _(a).map(f.partial(ops.mul, 2)).filter(f.partial(ops.gt, 2)).reduce(ops.add).val();
}

suite(checkCapitalize, [
    'foobar', 'Foobar'
]);

function checkCapitalize(a) {
    var _ = chain(capitalize);

    return _(a).capitalize().val();
}
