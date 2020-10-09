const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  wareName: {
    type: String,
    require: [true, "Spu名称不能少"],
  },
  wareAlias: {
    type: String,
    require: [true, "spu描述不能少"],
  },
  wareBrandName: {
    type: String,
    require: [true, "商品品牌名称不能少"],
  },
  spuId: {
    type: Number,
    require: [true, "分类名称不能少"],
  },
  marketPrice: {
    type: Number,
    require: [true, "积分价格不能少"],
  },
  importantNotice: {
    type: String,
  },
  spuImgUrl: {
    type: Array,
    require: [true, "spuImgUrl"],
  },
  wareNormalAttr: {
    type: Array,
    //  规格参数
  },
  wareSaleAttr: {
    type: Array,
    require: [true, "基础销售属性"],
  },

  partnerName: String,
  skuWareCode: String,
  wareBigKindName: String,
  stock: {
    type: Number,
    min: [0, "库存不能小于0"],
    default: 0,
  },
  category: {
    type: Object,
    require: [true, "商品分类不能少"],
  },
  isOnSale: {
    type: Boolean,
    default: true,
  },
  // created: {
  //   type: Date,
  //   default: Date.now(),
  // },
});

module.exports = mongoose.model("product", schema);
// mongoose
//   .model("product", schema)
//   .create().then()
//   .catch();
