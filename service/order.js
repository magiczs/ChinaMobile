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
}

/**
 * 查询单个订单
 * @param id
 * @returns {Promise<*>}
 */
async function getOrderById(id, username) {
  let order = await Order.findOne({ orderId: id, username });
  console.log(order);
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
function update(productId, username, order) {
  let res = Order.updateOne({ orderId: productId, username }, order);
  if (!res || res.n === 0) {
    throw Error("订单更新失败");
  }
}

/**
 * 取消订单
 * @param id
 * @returns {Promise<void>}
 */
async function setOrderCancel(id, username) {
  let order = await getOrderById(id, username);
  order.status = 2;
  order.cancelTime = Date.now();
  await update(id, order);
}

/**
 * 支付订单
 * @param id
 * @returns {Promise<void>}
 */
async function setOrderSuccess(id, username) {
  let order = await getOrderById(id, username);
  order.status = 1;
  order.payTime = Date.now();
  await update(id, username, order);
}

module.exports = {
  addOrder,
  setOrderCancel,
  setOrderSuccess,
  getOrderById,
  getOrders,
};
