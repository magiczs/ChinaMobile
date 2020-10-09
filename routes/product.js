const productService = require("../service/product");
const router = require("express").Router();

/**
 * 添加商品
 */
router.post("/", async (req, res) => {
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
 */
router.post("/getProducts", async (req, res) => {
  let products = await productService.getProductsByPage(
    req.query.page,
    req.query.limit,
    req.query.sort,
    req.body
  );
  res.success(products);
});
module.exports = router;
