var chain = require('./functional/chain');
var each = require('./functional/each');
var values = require('./object/values');
    // GENERATED! DO NOT MODIFY!
    var functions = {
        'abs': require('./math/abs'),
        'acos': require('./math/acos'),
        'asin': require('./math/asin'),
        'atan': require('./math/atan'),
        'atan2': require('./math/atan2'),
        'between': require('./math/between'),
        'ceil': require('./math/ceil'),
        'choose': require('./math/choose'),
        'clamp': require('./math/clamp'),
        'cos': require('./math/cos'),
        'exp': require('./math/exp'),
        'floor': require('./math/floor'),
        'log': require('./math/log'),
        'max': require('./math/max'),
        'min': require('./math/min'),
        'pow': require('./math/pow'),
        'randint': require('./math/randint'),
        'random': require('./math/random'),
        'range': require('./math/range'),
        'round': require('./math/round'),
        'sin': require('./math/sin'),
        'sqrt': require('./math/sqrt'),
        'tan': require('./math/tan')
    };
    var ret = chain(values(functions));

    each(function(k, v) {
        ret[k] = v;
    }, functions);

    module.exports = ret;

