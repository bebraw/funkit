var suite = require('suite.js');
var f = require('funkit/string');

suite(f.zfill, [
    [4, '1'], '0001',
    [2, '123'], '123',
    [3, 'a'], '00a',
    [3, 2], '002'
]);
