var chain = require('./functional/chain');
var each = require('./functional/each');
var values = require('./object/values');
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

    module.exports = ret;

