define(function() {
    // http://phpjs.org/functions/rtrim:507
    function rtrim(charlist, str) {
        charlist = !charlist? ' \\s\u00A0': (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
        var re = new RegExp('[' + charlist + ']+$', 'g');

        return (str + '').replace(re, '');
    }
    return rtrim;
});
