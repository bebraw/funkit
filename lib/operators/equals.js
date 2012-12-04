define(['../is'], function(is) {
    // http://stackoverflow.com/questions/201183/how-do-you-determine-equality-for-two-javascript-objects
    function equals(a, b) {
        function checkArray(n, m) {
            for(var i = 0, len = n.length; i < len; i++) {
                if(!equals(n[i], m[i])) return false;
            }

            return true;
        }

        function checkObject(n, m) {
            for(var i in n) {
                if(n.hasOwnProperty(i)) {
                    if(!m.hasOwnProperty(i)) return false;
                    if(!equals(n[i], m[i])) return false;
                }
            }

            return true;
        }

        if(!is.defined(a) && !is.defined(b)) return true;
        if(!is.defined(a) || !is.defined(b)) return false;
        if(is.array(a) && is.array(b)) return checkArray(a, b) && checkArray(b, a);
        if(is.object(a) && is.object(b)) return checkObject(a, b) && checkObject(b, a);
        if(is.NaN(a)) return true;

        return a === b;
    }
    return equals;
});
