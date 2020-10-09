const recommend = require("../model/recommend");

/**
 * 查询分类
 * @param id
 * @returns {Promise<*>}
 */
async function findById() {
  return await recommend.findOne({}, { _id: 0, __v: 0 });
}

module.exports = {
  findById,
};
