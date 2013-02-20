var chain = require('./functional/chain');
var each = require('./functional/each');
var values = require('./object/values');
    // GENERATED! DO NOT MODIFY!
    var functions = {
        'chunk': require('./array/chunk'),
        'flatten': require('./array/flatten'),
        'index': require('./array/index'),
        'last': require('./array/last')
    };
    var ret = chain(values(functions));

    each(function(k, v) {
        ret[k] = v;
    }, functions);

    module.exports = ret;

