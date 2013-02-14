define(['require', './functional/chain', './functional/each', './object/values', './string/atoi',
        './string/capitalize',
        './string/itoa',
        './string/lower',
        './string/ltrim',
        './string/partition',
        './string/reverse',
        './string/rtrim',
        './string/separate',
        './string/split',
        './string/title',
        './string/trim',
        './string/upper',
        './string/zfill'],
        function(require, chain, each, values) {
    // GENERATED! DO NOT MODIFY!
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
