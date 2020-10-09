const Home = require("../model/home");

/**
 * 查询首页数据
 * @param id
 * @returns {Promise<*>}
 */
async function findHomeInfo() {
  let res = await Home.findOne(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
  return res;
}
module.exports = {
  findHomeInfo,
};
