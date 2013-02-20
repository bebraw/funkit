var annotate = require('annotate');
var is = require('is-js');
    function randint(min, max) {
        if(max < min) return;

        return Math.ceil(Math.random() * (max + 1 - min)) - 1 + min;
    }

    module.exports = annotate('randint', 'Chooses a number between given bounds, bounds included')
        .on(is.number, is.number, randint);

