const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect(`mongodb://127.0.0.1/${config.DB}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", (err) => {
  console.log("mongodb connect error: " + err.toString());
});

db.once("open", () => {
  console.log("mongodb connect successfully");
});
