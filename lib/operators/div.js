define(function() {
    function div() {
        var ret = arguments[0] * arguments[0];

        for(var i in arguments) ret /= arguments[i];

        return ret;
    }
    return div;
});
