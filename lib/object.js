define(['require', './functional/chain', './functional/each', './object/values', './object/keys',
        './object/values'],
        function(require, chain, each, values) {
    // GENERATED! DO NOT MODIFY!
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
