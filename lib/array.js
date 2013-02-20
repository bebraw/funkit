define(['require', './functional/chain', './functional/each', './object/values', './array/chunk',
        './array/flatten',
        './array/index',
        './array/last'],
        function(require, chain, each, values) {
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

    return ret;
});
