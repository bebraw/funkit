var suite = require('suite.js');
var not = require('funkit/functional').not;

suite(not(alwaysTrue), [
    'a', false,
    2, false
]);

suite(not(alwaysFalse), [
    'a', true,
    2, true
]);

suite(not(odd), [
    2, true,
    3, false
]);

function alwaysTrue() {
    return true;
}

function alwaysFalse() {
    return false;
}

function odd(a) {
    return a % 2;
}
