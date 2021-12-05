const fs = require('fs'), /* filesystem встроенный в nodejs */
    path = './gulp/tasks',
    arrayPathFills = fs.readdirSync(path).map(item => item = path + '/' + item);

module.exports = arrayPathFills