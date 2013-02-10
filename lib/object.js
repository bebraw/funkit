// GENERATED! DO NOT MODIFY!
define(['require', 'funkit/functional/chain', 'funkit/functional/each', 'funkit/object/values', './object/keys',
        './object/values'],
        function(require, chain, each, values) {
    var functions = {
        'keys': require('./object/keys'),
        'values': require('./object/values')
    };
    var ret = chain(values(functions));

    each(function(k, v) {
        ret[k] = v;
    }, functions);

    return ret;
});
