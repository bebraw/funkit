var annotate = require('annotate');
    module.exports = annotate('random', 'Returns a floating-point, pseudo-random number in the range [0, 1)')
        .on(Math.random);

