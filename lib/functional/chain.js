define(function() {
    function chain() {
        var v;
        var init = function(o) {
            v = o;
            return funcs;
        };
        var funcs = {
            val: function() {return v;}
        };

        for(var i in arguments) {
            var f = arguments[i];
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
