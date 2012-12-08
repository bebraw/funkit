define(function() {
    // http://stackoverflow.com/questions/4394747/javascript-curry-function
    function partial(fn) {
        var slice = Array.prototype.slice;
        var args = slice.apply(arguments, [1]);
        var ret = function() {
            return fn.apply(null, args.concat(slice.apply(arguments)));
        };

        ret._name = fn._name;
        ret._doc = fn._doc;
        ret._invariants = fn._invariants && fn._invariants.map(function(v) {
            // XXX: might be missing some corner case
            return v.slice(v.length - args.length);
        });

        return ret;
    }
    return partial;
});
