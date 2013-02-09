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
        ret._preconditions = fn._preconditions && fn._preconditions.map(function(v) {
            return v.slice(args.length);
        });
        ret._postconditions = fn._postconditions;

        return ret;
    }
    return partial;
});
