var fs = require("fs");
var lambdaWarm;
const timeWarmed = Date.now();

module.exports = function (cb) {
  // this is, of course, going to depend on when you actually load this module
  fs.readFile("/tmp/lambdaWarm", "", function (err, data) {
    if (err && err.code == "ENOENT") {
      fs.writeFile(
        "/tmp/lambdaWarm",
        parseInt(timeWarmed, 10).toString(),
        function (err) {
          if (err) {
            return cb(err);
          }
          return cb(null, false, new Date(parseInt(timeWarmed)));
        }
      );
    } else {
      return cb(null, true, new Date(parseInt(data)));
    }
  });
};
