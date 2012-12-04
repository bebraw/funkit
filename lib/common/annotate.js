define(['../is', '../array/last', '../functional'], function(is, last, functional) {
    var map = functional.map;
    var filter = functional.filter;

    function annotate() {
        var args = Array.prototype.slice.call(arguments);
        var fn = args.shift();

        if(is.string(last(args))) {
            fn._doc = args.pop();
        }

        fn._types = args;

        return function() {
            var curArgs = arguments;

            var info = map(function(arg, i) {
                var curArg = curArgs[i];

                if(is.fn(arg)) {
                    if(arg(curArg)) return {
                        state: 'ok',
                        arg: curArg
                    };
                    else return {
                        state: 'error',
                        info: 'Parameter check failed!',
                        arg: curArg
                    };
                }
                else {
                    return {
                        state: 'error',
                        info: 'Parameter checker is not a function!',
                        arg: curArg
                    };
                }
            }, args);
            var isOk = filter(function(k) {
                return k.state == 'ok';
            }, info).length == info.length;

            if(isOk) return fn.apply(undefined, curArgs);
            else console.warn(info);
        };
    }
    return annotate;
});
