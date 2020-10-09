const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  code: Number,
  data: Array,
  resultMessage: String,
});
module.exports = mongoose.model("home", schema);
