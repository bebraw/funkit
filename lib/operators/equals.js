define(['../types/isArray', '../types/isObject', '../types/isDefined', '../types/isNaN'], function(isArray, isObject, isDefined, isNaN) {
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

        if(!isDefined(a) && !isDefined(b)) return true;
        if(!isDefined(a) || !isDefined(b)) return false;
        if(isArray(a) && isArray(b)) return checkArray(a, b) && checkArray(b, a);
        if(isObject(a) && isObject(b)) return checkObject(a, b) && checkObject(b, a);
        if(isNaN(a)) return true;

        return a === b;
    }
    return equals;
});
