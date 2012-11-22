define(function() {
    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    return capitalize;
});
