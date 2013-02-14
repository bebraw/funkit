define(['require', './functional/chain', './functional/each', './object/values', './math/abs',
        './math/acos',
        './math/asin',
        './math/atan',
        './math/atan2',
        './math/between',
        './math/ceil',
        './math/choose',
        './math/clamp',
        './math/cos',
        './math/exp',
        './math/floor',
        './math/log',
        './math/max',
        './math/min',
        './math/pow',
        './math/randint',
        './math/random',
        './math/range',
        './math/round',
        './math/sin',
        './math/sqrt',
        './math/tan'],
        function(require, chain, each, values) {
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

    return ret;
});
