const router = require("express").Router();
const userService = require("../service/user");
const menuService = require("../service/menu");

/**
 * 获取用户信息
 */
// router.get("/:username", async (req, res) => {
//   let userInfo = await userService.getUserInfo(req.params.username);
//   res.json(userInfo);
// });

/**
 * 注册
 */
router.post("/register", async (req, res) => {
  try {
    const result = await userService.register(req.body);
    res.json({ code: 200, data: result });
  } catch (error) {
    // console.log(error.message);
    res.json({ code: 201, data: error.message });
  }
});

/**
 * 登录
 */
router.post("/login", async (req, res) => {
  try {
    let token = await userService.login(req.body);
    let userInfo = await userService.getUserInfo(req.body.username);
    res.json({
      code: 200,
      data: {
        userInfo,
        token,
      },
    });
  } catch (error) {
    res.json({
      code: 201,
      data: "用户名密码错误",
    });
  }
});

/**
 * 获取用户权限列表
 */
router.get("/menu", async (req, res) => {
  let userInfo = await menuService.getMenu(req.user.username);
  res.json({ data: userInfo, code: 200 });
});

/**
 * 删除用户
 */
router.delete("/:username", async (req, res) => {
  await userService.deleteByUsername(req.params.username);
  res.success();
});

module.exports = router;
