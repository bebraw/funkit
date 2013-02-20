
    function not(fn) {
        return function() {
            return !fn.apply(undefined, arguments);
        };
    }
    module.exports = not;

