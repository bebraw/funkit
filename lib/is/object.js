define(function() {
    // http://phpjs.org/functions/is_object:450
    function object(mixed_var) {
        if (Object.prototype.toString.call(mixed_var) === '[object Array]') {
            return false;
        }
        return mixed_var !== null && typeof mixed_var == 'object';
    }
    return object;
});
