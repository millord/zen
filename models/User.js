const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 6,
    max: 30,
    required: true
  },
  email: {
    type: String,
    min: 6,
    max: 1024,
    required: true
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model("User", userSchema);
