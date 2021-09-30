const mongoose = require("mongoose");
const constants = require("./constants");
const dotenv = require("dotenv");
dotenv.config();

exports.connectMongooseServer = function () {
  const mongoDBUrl = process.env.MONGOOSE_CONNECTION_URL;

  mongoose.connect(mongoDBUrl, constants.MONGODB_CONNECTION_CONFIG);
  mongoose.Promise = global.Promise;

  return mongoose.connection;
};
