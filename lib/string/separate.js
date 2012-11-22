define(['../types/isDefined'], function(isDefined) {
    function separate(str, start, end) {
        var s = str.split(start)[1];

        if(!isDefined(s)) return '';

        return s.trim().split(end)[0].trim();
    }
    return separate;
});
