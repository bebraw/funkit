// GENERATED! DO NOT MODIFY!
define(['funkit/functional/chain', 'funkit/functional/each', 'funkit/object/values'],
        function(chain, each, values, require) {
    var functions = {
        'atoi': require('./string/atoi'),
        'capitalize': require('./string/capitalize'),
        'itoa': require('./string/itoa'),
        'lower': require('./string/lower'),
        'ltrim': require('./string/ltrim'),
        'partition': require('./string/partition'),
        'reverse': require('./string/reverse'),
        'rtrim': require('./string/rtrim'),
        'separate': require('./string/separate'),
        'split': require('./string/split'),
        'title': require('./string/title'),
        'trim': require('./string/trim'),
        'upper': require('./string/upper'),
        'zfill': require('./string/zfill')
    };
    var ret = chain(values(functions));

    each(function(k, v) {
        ret[k] = v;
    }, functions);

    return ret;
});
