var annotate = require('annotate');
var is = require('is-js');
    function separate(str, start, end) {
        var s = str.split(start)[1];

        if(!is.set(s)) return '';

        return s.trim().split(end)[0].trim();
    }

    module.exports = annotate('separate', 'Returns the part of `string` between given `start` and `end`.')
        .on(is.string, is.string, is.string, separate);

