define(['../is'], function(is) {
    function separate(str, start, end) {
        var s = str.split(start)[1];

        if(!is.defined(s)) return '';

        return s.trim().split(end)[0].trim();
    }
    return separate;
});
