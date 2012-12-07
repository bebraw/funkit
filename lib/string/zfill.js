define(['annotate.js', 'is-js'], function(annotate, is) {
    function zfill(amount, str) {
        var pad = '';
        str += '';

        while(pad.length < amount - str.length) pad += '0';

        return pad + str;
    }

    // TODO: mark str either as string or number
    return zfill;
    //return annotate(zfill, is.number, is.string,
    //    "Fills `string` beginning with the given `amount` of zeroes.");
});
