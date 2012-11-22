define(['../types/isNumber'], function(isNumber) {
    function itoa(i) {
        return isNumber(i)? String.fromCharCode(i): undefined;
    }
    return itoa;
});
