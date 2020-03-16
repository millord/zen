const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 30,
    min: 10
  },
  description: {
    type: String,
    required: true,
    max: 300,
    min: 10
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", postSchema);
