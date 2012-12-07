var suite = require('suite.js');
var f = require('funkit');

suite(f.partial(f.functional.zip, ['a', 'b', 'c']), [
    [[1, 2, 3]], [['a', 1], ['b', 2], ['c', 3]]
]);
