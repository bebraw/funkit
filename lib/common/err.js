define(['annotate', 'is-js'], function(annotate, is) {
    function err(fn) {
        return function(e, d) {
            if(e) throw e;

            fn(d);
        };
    }

    return annotate('err', 'Wraps given function in Node-style error handler.')
        .on(is.fn, err);
});
