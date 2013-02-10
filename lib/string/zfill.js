define(['annotate', 'is-js'], function(annotate, is) {
    function zfill(amount, str) {
        var pad = '';
        str += '';

        while(pad.length < amount - str.length) pad += '0';

        return pad + str;
    }

    return annotate('zfill', 'Fills `string` beginning with the given `amount` of zeroes.')
        .on(is.number, zfill)
        .on(is.string, zfill);
});
