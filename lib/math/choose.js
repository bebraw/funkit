define(['./randint'], function(randint) {
    function choose(m) {
        return m[randint(0, m.length - 1)];
    }
    return choose;
});
