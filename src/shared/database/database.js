const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cnisw.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
);

// mongoose.Promise = global.Promise;

module.exports = mongoose;
