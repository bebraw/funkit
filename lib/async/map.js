define(['annotate', 'is-js'], function(annotate, is) {
    function map(operation, data, done) {
        var accumData = [];
        var i, len;

        for(i = 0, len = data.length; i < len; i++) {
            operation(data[i], accumulate, i);
        }

        function accumulate(err, d) {
            if(err) return done(err);

            accumData.push(d);

            if(accumData.length == len) done(null, accumData);
        }
    }

    return annotate('map', 'Runs given `operation` on `data` in map and executes `done` once finished.')
        .on(is.fn, is.array, is.fn, map);
});
