const mongoose = require("../../../shared/database/database");
const Schema = mongoose.Schema;

const users = new Schema({
  name: String,
  age: { type: Number, default: 1 },
  email: { type: String, required: true },
  password: String,
});

module.exports = mongoose.model("Users", users);
