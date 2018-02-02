var fs = require('fs');

module.exports = function (cb) {
    // this is, of course, going to depend on when you actually load this module
    const timeWarmed = Date.now();
    
    fs.readFile('/tmp/lambdaWarm', '' , function (err, data) {
        if (err && err.code == 'ENOENT') {
            fs.writeFile('/tmp/lambdaWarm', timeWarmed, function (err) {
                if (err) {
                    return cb(err);
                }
                return cb(null, false, timeWarmed);
            })
        } else {
            return cb(null, true, new Date(parseInt(data)))
        }
    })
}