define(['annotate.js', 'is-js'], function(annotate, is) {
    function err(fn) {
        return function(e, d) {
            if(e) throw e;

            fn(d);
        };
    }

    return annotate(err, is.fn, "Wraps given function in Node-style error handler.")
});
