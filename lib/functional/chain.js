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
            funcs[f.name] = wrap(f);
        }

        function wrap(f) {
            return function() {
                v = f.call(undefined, arguments[0], v);

                return funcs;
            };
        }

        return init;
    }
    return chain;
});
