define(function() {
    function not(fn) {
        return function() {
            return !fn.apply(undefined, arguments);
        };
    }
    return not;
});
