// GENERATED! DO NOT MODIFY!
define(['require', 'funkit/functional/chain', 'funkit/functional/each', 'funkit/object/values', './async/map'],
        function(require, chain, each, values) {
    var functions = {
        'map': require('./async/map')
    };
    var ret = chain(values(functions));

    each(function(k, v) {
        ret[k] = v;
    }, functions);

    return ret;
});
