define(function() {
    function mul() {
        var ret = 1;

        for(var i in arguments) ret *= arguments[i];

        return ret;
    }
    return mul;
});
