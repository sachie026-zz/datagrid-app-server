// Add cors handling to allow the front end app to access the server
const dotenv = require("dotenv");
dotenv.config();

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
