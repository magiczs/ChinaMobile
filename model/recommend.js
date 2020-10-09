const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  sameKindRecWareList: {
    type: Array,
    require: true,
  },
  searchList: {
    type: Array,
    require: true,
  },
});

module.exports = mongoose.model("recommend", schema);
