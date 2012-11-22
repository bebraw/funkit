define(function() {
    function between(min, max, a) {
        return min <= a && a <= max;
    }
    return between;
});
