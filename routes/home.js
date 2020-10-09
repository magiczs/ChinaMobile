const homeServer = require("../service/home");

const router = require("express").Router();

/**
 * 查询首页数据
 */
router.get("", async (req, res) => {
  console.log(111);
  let homeInfo = await homeServer.findHomeInfo();
  res.json(homeInfo);
});

module.exports = router;
