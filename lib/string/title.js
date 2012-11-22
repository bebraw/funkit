define(['./capitalize'], function(capitalize) {
    function title(str) {
        return str.split(' ').map(capitalize).join(' ');
    }
    return title;
});
