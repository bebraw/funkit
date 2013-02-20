var annotate = require('annotate');
var is = require('is-js');
var randint = require('./randint');
    function choose(m) {
        return m[randint(0, m.length - 1)];
    }

    module.exports = annotate('choose', 'Chooses an item randomly.')
        .on(is.array, choose);

