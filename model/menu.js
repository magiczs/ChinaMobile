const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  data: Object,
  rights: Array,
  username: String,
});

module.exports = mongoose.model("menu", schema);
// mongoose
//   .model("menu", schema)
//   .create()
//   .then()
//   .catch();
