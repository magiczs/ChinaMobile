const Product = require("../model/product");

/**
 * 添加商品
 * @param product
 * @returns {Promise<void>}
 */
async function addProduct(product) {
  return await Product.create(product);
}

/**
 * 删除商品
 * @param id
 * @returns {Promise<void>}
 */
async function deleteById(id) {
  await isIdExist(id);
  let res = await Product.deleteOne({ _id: id });
  if (!res || res.n === 0) {
    throw Error("商品删除失败");
  }
}

/**
 * 更新商品
 * @param id
 * @param product
 * @returns {Promise<void>}
 */
async function updateProduct(id, product) {
  await isIdExist(id);
  let res = await Product.updateOne({ spuId: id }, product);
  if (!res || res.n === 0) {
    throw Error("商品更新失败");
  }
}

/**
 * 查询商品
 * @param id
 * @returns {Promise<*>}
 */
async function findById(spuId) {
  await isIdExist(spuId);
  let res = await Product.findOne(
    { spuId },
    {
      _id: 0,
      __v: 0,
    }
  );
  return res;
}

/**
 * 分页查询
 * @param page
 * @returns {Promise<void>}
 */
async function getProductsByPage(
  keywords = "",
  page = 1,
  pageCount = 5,
  sort = 1,
  body = {}
) {
  // let pageCount = require("../config").PageCount;
  let sorts = +sort;
  let searchInfo = { ...body };
  if (!searchInfo.wareBrandName) {
    delete searchInfo.wareBrandName;
  } else if (!searchInfo.categoryId) {
    delete searchInfo.categoryId;
  }
  if (keywords) {
    let regRxp = new RegExp(keywords);
    searchInfo.wareName = regRxp;
  }
  let products = await Product.find(searchInfo)
    .skip((page - 1) * pageCount)
    .limit(+pageCount)
    .sort({ marketPrice: sorts })
    .select("-__v");
  let trademaSet = new Set();
  let total = await Product.find(searchInfo).count();
  let tradema = await Product.find(searchInfo);
  tradema.forEach((item) => {
    trademaSet.add(item.wareBrandName);
  });
  let trademarkList = Array.from(trademaSet);
  return { products, total, trademarkList };
}

/**
 * 判断id是否存在
 * @param id
 * @returns {Promise<void>}
 */
async function isIdExist(spuId) {
  let p = await Product.findOne({ spuId });
  if (!p || p.n === 0) {
    throw Error(`spuId为${spuId}的商品不存在`);
  }
}

module.exports = {
  addProduct,
  deleteById,
  updateProduct,
  findById,
  getProductsByPage,
};
