var annotate = require('annotate');
var is = require('is-js');
    function map(operation, data, done) {
        var accumData = [];

        for(var i = 0, len = data.length; i < len; i++) {
            operation(data[i], accumulate, i);
        }

        function accumulate(err, d) {
            if(err) return done(err);

            accumData.push(d);

            if(accumData.length == len) done(null, accumData);
        }
    }

    module.exports = annotate('map', 'Runs given `operation` on `data` in map and executes `done` once finished.')
        .on(is.fn, is.array, is.fn, map);

