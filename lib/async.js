exports.parallel = parallel;

function parallel(fn, data, done) {
    var accumData = [];

    for(var i = 0, len = data.length; i < len; i++) {
        fn(data[i], accumulate);
    }

    function accumulate(err, d) {
        if(err) return done(err);

        accumData.push(d);

        if(accumData.length == len) done(null, accumData);
    }
}

