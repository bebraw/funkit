define(['../types/isString', '../array/last'], function(isString, last) {
    function annotate() {
        var args = Array.prototype.slice.call(arguments);
        var fn = args.shift();

        if(isString(last(args))) {
            fn._doc = args.pop();
        }

        fn._types = args;

        return fn;
    }
    return annotate;
});
