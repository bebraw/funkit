define(function() {
    function randint(min, max) {
        return Math.ceil(Math.random() * (max + 1 - min)) - 1 + min;
    }
    return randint;
});
