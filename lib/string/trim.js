define(['./ltrim', './rtrim'], function(ltrim, rtrim) {
    function trim(charlist, str) {
        return ltrim(charlist, rtrim(charlist, str));
    }
    return trim;
});
