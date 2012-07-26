var merge = require('./common').merge;

exports = merge(exports, require('./async'));
exports = merge(exports, require('./common'));
exports = merge(exports, require('./array'));
exports = merge(exports, require('./object'));
exports = merge(exports, require('./functional'));
exports = merge(exports, require('./operators'));
exports = merge(exports, require('./string'));
exports = merge(exports, require('./math'));
module.exports = merge(exports, require('./types'));
