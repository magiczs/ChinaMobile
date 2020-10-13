const productService = require("../service/product");
const router = require("express").Router();

/**
 * 添加商品
 */
router.post("/addProduct", async (req, res) => {
  await productService.addProduct(req.body);
  res.success();
});

/**
 * 删除商品
 */
router.delete("/:id", async (req, res) => {
  await productService.deleteById(req.params.id);
  res.success();
});

/**
 * 修改商品信息
 */
router.put("/:id", async (req, res) => {
  await productService.updateProduct(req.params.id, req.body);
  res.success();
});

/**
 * 查询商品
 */
router.get("/getProductInfo/:spuId", async (req, res) => {
  let product = await productService.findById(req.params.spuId);
  res.json({ data: product, code: 200 });
});

/**
 * 分页查询
 * params 参数 keyword 关键字搜索
 * query 参数 page 第几页
 * query 参数 limit 一页显示数量
 * query 参数 sort 积分排序 1正序 -1倒序
 * 请求体参数 ：categoryId 通过三级分类Id查询
 * 请求体参数 wareBrandName 通过品牌Id查询
 */
router.post("/getProducts/:keyword?", async (req, res) => {
  let products = await productService.getProductsByPage(
    req.params.keyword,
    req.query.page,
    req.query.limit,
    req.query.sort,
    req.body
  );
  res.success(products);
});
module.exports = router;
