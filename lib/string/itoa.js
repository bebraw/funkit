define(['../is'], function(is) {
    function itoa(i) {
        return is.number(i)? String.fromCharCode(i): undefined;
    }
    return itoa;
});
