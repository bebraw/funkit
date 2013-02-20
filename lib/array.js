define(['require', './functional/chain', './functional/each', './object/values', './array/chunk',
        './array/index',
        './array/flatten',
        './array/last'],
        function(require, chain, each, values) {
    // GENERATED! DO NOT MODIFY!
    var functions = {
        'chunk': require('./array/chunk'),
        'index': require('./array/index'),
        'flatten': require('./array/flatten'),
        'last': require('./array/last')
    };
    var ret = chain(values(functions));

    each(function(k, v) {
        ret[k] = v;
    }, functions);

    return ret;
});
