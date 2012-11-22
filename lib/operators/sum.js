define(function() {
    function sum() {
        var ret = 0;

        for(var i in arguments) ret += arguments[i];

        return ret;
    }
    return sum;
});
