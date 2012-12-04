define(function() {
    function add() {
        var ret = 0;

        for(var i in arguments) ret += arguments[i];

        return ret;
    }
    return add;
});
