const menu = require("../model/menu");

async function getMenu(username) {
  console.log("username", username);
  let result = await menu.findOne({ username: username });
  return result;
}
module.exports = {
  getMenu,
};
