define(['is-js'], function(is) {
    function chain() {
        var v;
        var init = function(o) {
            v = o;
            return funcs;
        };
        var funcs = {
            val: function() {return v;}
        };
        var args = is.array(arguments[0])? arguments[0]: arguments;

        for(var i in args) {
            var f = args[i];
            funcs[f.name || f._name] = wrap(f);
        }

        function wrap(f) {
            return function() {
                var arg = is.set(arguments[0]) && arguments[0];
                v = arg? f.call(undefined, arg, v): f.call(undefined, v);

                return funcs;
            };
        }

        return init;
    }
    return chain;
});
