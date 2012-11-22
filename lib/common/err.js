define(function() {
    function err(fn) {
        return function(e, d) {
            if(e) throw e;

            fn(d);
        };
    }
    return err;
});
