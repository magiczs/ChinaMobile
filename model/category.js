const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  categoryType: Number,
  categoryLevel: Number,
  categories: Array,
  categoryName: String,
  categoryId: Number,
});

module.exports = mongoose.model("category", schema);
// mongoose
//   .model("category", schema)
//   .create().then()
//   .catch();
