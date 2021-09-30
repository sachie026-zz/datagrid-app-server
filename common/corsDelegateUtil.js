const dotenv = require("dotenv");
dotenv.config();

// Get allowed URLs for CORS from environment
var allowlist = process.env.CORS_ALLOW_URLS.split(" ");

module.exports = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};
