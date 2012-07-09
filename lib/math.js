exports.between = between;
exports.randint = randint;
exports.choose = choose;

function between(min, max, a) {
    return min <= a && a <= max;
}

function randint(min, max) {
    return Math.ceil(Math.random() * (max + 1 - min)) - 1 + min;
}

function choose(m) {
    return m[randint(0, m.length - 1)];
}

