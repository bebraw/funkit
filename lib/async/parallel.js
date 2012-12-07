define(['annotate.js', 'is-js'], function(annotate, is) {
    function parallel(operation, data, done) {
        var accumData = [];

        for(var i = 0, len = data.length; i < len; i++) {
            operation(data[i], accumulate);
        }

        function accumulate(err, d) {
            if(err) return done(err);

            accumData.push(d);

            if(accumData.length == len) done(null, accumData);
        }
    }

    return annotate(parallel, is.fn, is.array, is.fn,
        "Runs given `operation` on `data` in parallel and executes `done` once finished.");
});
