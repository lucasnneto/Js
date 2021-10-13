const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.cnisw.mongodb.net/database?retryWrites=true&w=majority"
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
