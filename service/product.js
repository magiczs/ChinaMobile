const Product = require("../model/product");

/**
 * 添加商品
 * @param product
 * @returns {Promise<void>}
 */
//wareName:String "Spu名称不能少
//wareAlias:String "spu描述不能少"
//wareBrandName:String 商品品牌名称不能少
//marketPrice:Number 商品价格不能少
// stock Number 商品库存
// spuImgUrl Array 商品图片列表

async function addProduct(product) {
  product.spuId = Date.now().toString(32);
  product.importantNotice = "满减优惠";
  product.categoryId = "2000000000000159";
  return await Product.create(product);
}

// /**
//  *
//  * @param {*} product
//  */
// async function updateProduct(product) {
//   return await Product.updateOne({ spuId: product.spuId }, product);
// }

/**
 * 删除商品
 * @param id
 * @returns {Promise<void>}
 */
async function deleteById(id) {
  await isIdExist(id);
  let res = await Product.deleteOne({ spuId: id });
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
async function updateProduct(product) {
  await isIdExist(product.spuId);
  let res = await Product.updateOne({ spuId: product.spuId }, product);
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
 * 查找所有
 */
async function getAllProducts() {
  const result = await Product.find({}, { _id: 0, __v: 0 });
  return result;
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
  console.log(keywords);
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
  getAllProducts,
};
