define(function() {
    // http://phpjs.org/functions/ltrim:467
    function ltrim(charlist, str) {
        charlist = !charlist? ' \\s\u00A0': (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
        var re = new RegExp('^[' + charlist + ']+', 'g');

        return (str + '').replace(re, '');
    }
    return ltrim;
});
