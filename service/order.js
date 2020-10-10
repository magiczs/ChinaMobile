const Order = require("../model/order");
const productService = require("../service/product");

/**
 * 添加订单
 * @param order
 * @returns {Promise<void>}
 */
async function addOrder(order, username) {
  //1.根据商品的id查询商品 spuId
  let product = await productService.findById(order.spuId);
  if (!product) {
    throw Error("商品不存在");
  }
  //判断库存是否足够
  if (product.stock < order.count) {
    throw Error("商品库存不够");
  }

  order.productName = product.wareName;
  order.productPrice = product.marketPrice;
  order.gsmTag = product.gsmTag;
  order.defaultImg = product.spuImgUrl[0];
  order.username = username;
  order.total = order.productPrice * order.count;
  order.created = Date.now();
  order.orderId = (+order.spuId + Date.now()).toString(16);
  await Order.create(order);

  //2.减去库存
  let update = {
    stock: product.stock - order.count,
  };
  await productService.updateProduct(order.spuId, update);
  return order;
}

/**
 * 查询单个订单
 * @param id
 * @returns {Promise<*>}
 */
async function getOrderById(id, username) {
  let order = await Order.findOne({ orderId: id, username });
  return order;
}

/**
 * 查询全部订单
 */
async function getOrders(username) {
  let order = await Order.find({ username });
  return order;
}

/**
 * 更新订单
 * @param id
 * @param order
 * @returns {Promise<void>}
 */
async function update(productId, username, order) {
  console.log(productId, username, order);
  let res = await Order.updateOne({ orderId: productId }, order);
  if (!res || res.n === 0) {
    throw Error("订单更新失败");
  }
}

/**
 * 取消订单
 * @param id
 * @returns {Promise<void>}
 */
async function setOrderCancel({ orderId }, username) {
  console.log(orderId, username);
  let order = await getOrderById(orderId, username);

  order.status = 2;
  order.cancelTime = Date.now();
  let result = await Order.updateOne({ orderId, username }, order);
  console.log(result);
}
/**
 * 支付订单
 * @param id
 * @returns {Promise<void>}
 */
async function setOrderSuccess({ orderId }, username) {
  let order = await getOrderById(orderId, username);

  order.status = 1;
  order.payTime = Date.now();
  // console.log({ orderId, username });
  // console.log(order);
  let result = await Order.updateOne({ orderId, username }, order);
  console.log(result);
  return "ok";
}

module.exports = {
  addOrder,
  setOrderCancel,
  setOrderSuccess,
  getOrderById,
  getOrders,
};
