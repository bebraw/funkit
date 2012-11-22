define(['./isString'], function(isString) {
    function _isNaN(input) {
        return isString(input)? false: isNaN(input);
    }
    return _isNaN;
});
