const recommendService = require("../service/recommend");
const router = require("express").Router();

/**
 * 查询商品
 */

router.get("/getRecommendInfo", async (req, res) => {
  let product = await recommendService.findById();
  res.json({ data: product, code: 200 });
});

module.exports = router;
