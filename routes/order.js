const orderService = require("../service/order");
const router = require("express").Router();

/**
 * 查询所有订单
 */
router.get("/getOrder", async (req, res) => {
  let order = await orderService.getOrders(req.user.username);
  res.success(order);
});

/**
 * 查询订单
 */
router.get("/:id", async (req, res) => {
  let order = await orderService.getOrderById(req.params.id, req.user.username);
  res.success(order);
});

/**
 * 添加订单
 */
router.post("/", async (req, res) => {
  let o = await orderService.addOrder(req.body, req.user.username);
  res.success(o);
});

/**
 * 支付订单
 */
router.post("/pay", async (req, res) => {
  let o = await orderService.setOrderSuccess(req.body.spuId, req.user.username);
  res.success(o);
});

/**
 * 取消订单
 */
/**
 * 支付订单
 */
router.post("/pay", async (req, res) => {
  let o = await orderService.setOrderCancel(req.body.spuId, req.user.username);
  res.success(o);
});
module.exports = router;
