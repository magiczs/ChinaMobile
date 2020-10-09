const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  spuId: {
    type: String,
    require: [true, "商品id不能缺少"],
  },
  orderId: {
    type: String,
    require: [true, "商品id不能缺少"],
  },
  defaultImg: {
    type: String,
    require: [true, "商品图片不能缺少"],
  },
  gsmTag: {
    type: Boolean,
    require: [true, "商品是否实物"],
  },
  productName: {
    type: String,
    require: [true, "商品名称不能缺少"],
  },
  productPrice: {
    type: String,
    required: [true, "商品价格不能缺少"],
  },
  count: {
    type: Number,
    min: [1, "商品数量不能小于1"],
    require: [true, "商品数量不能为空"],
  },
  total: {
    type: String,
    required: [true, "商品总价不能为空"],
  },
  status: {
    type: Number,
    default: 0, //订单状态 0 未付款 1 付款成功 2 取消订单3
  },
  payTime: Date,
  cancelTime: Date,
  created: {
    type: Date,
    default: Date.now(),
  },
  username: String,
});

module.exports = mongoose.model("order", schema);
