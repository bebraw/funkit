// GENERATED! DO NOT MODIFY!
define(['funkit/functional/chain', 'funkit/functional/each', 'funkit/object/values'],
        function(chain, each, values, require) {
    var functions = {
        'map': require('./async/map')
    };
    var ret = chain(values(functions));

    each(function(k, v) {
        ret[k] = v;
    }, functions);

    return ret;
});
