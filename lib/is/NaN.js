define(['./string'], function(string) {
    function _isNaN(input) {
        return string(input)? false: isNaN(input);
    }
    return _isNaN;
});
