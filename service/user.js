let User = require("../model/user");
let crypto = require("lxj-crypto");
let axios = require("axios");
let config = require("../config");
let Base64 = require("js-base64").Base64;

/**
 * 登录
 * @param user
 * @returns {Promise<void>}
 */
async function login(user) {
  //https://app.cloopen.com:8883
  // /2013-12-26/Accounts/{accountSid}/SMS/{funcdes}?sig={SigParameter}

  //https://app.cloopen.com:8883/2013-12-26/Accounts/8a216da874af5fff01750b5933a21cba/SMS/TemplateSMS?sig=A611F3ECC3D63D0AA027B528BC5DCC2D
  // let accountSid = "8aaf070874af41ee01750d374d901eef";
  // let funcdes = "TemplateSMS";
  // // 24bd91f0ee264ff7a5bdc1b50c79e265 授权令牌
  // let SigParameter = "BEC237B3288D9CB8856CBFD665A3A132";
  // // let buf = Buffer.from("8a216da874af5fff01750b5933a21cba:20201009193233");
  // // let authorizations = Base64.encode(
  // //   "8aaf070874af41ee01750d374d901eef:20201009193030"
  // // );
  // let authorizations =
  //   "OGFhZjA3MDg3NGFmNDFlZTAxNzUwZDM3NGQ5MDFlZWY6MjAyMDEwMDkxOTMwMzA=";
  // console.log(authorizations);
  // let url = `https://app.cloopen.com:8883/2013-12-26/Accounts/${accountSid}/SMS/${funcdes}?sig=${SigParameter}`;
  // const result = await axios({
  //   url,
  //   method: "post",
  //   data: {
  //     to: "16609950990",
  //     appId: "8aaf070874af41ee01750d374e6a1ef5",
  //     templateId: 1,
  //     datas: ["111111", "1"],
  //   },
  //   headers: {
  //     Accept: "application/xml",
  //     "Content-Type": "application/xml;charset=utf-8",
  //     "Content-Length": "256",
  //     Authorization: authorizations,
  //   },
  // });
  // console.log(result.data);
  //对用户名进行加密
  user.password = crypto.sha256Hmac(user.password, user.username);
  //根据用户名和密码查询用户
  let res = await User.findOne({
    username: user.username,
    password: user.password,
  });
  //如果不存在该用户，说明用户名或密码错误
  if (!res) {
    throw Error("用户名或密码错误");
  }
  //如果存在就返回一个token
  let tokenData = {
    username: user.username,
    expire: Date.now() + config.TokenExpire,
  };
  let token = crypto.aesEncrypt(JSON.stringify(tokenData), config.TokenKey);
  return token;
}

/**
 * 注册
 * @param user
 * @returns {Promise<void>}
 */
async function register(user) {
  //判断用户名是否存在
  let res = await User.findOne({ username: user.username });
  if (res) {
    throw Error(`用户${user.username}已存在`);
  }
  //密码加密
  user.password = crypto.sha256Hmac(user.password, user.username);
  //设置默认角色，默认是商家用户
  user.role = 0;
  user.created = Date.now();
  user.nickName = "移动用户" + user.username.slice(0, 6);
  user.imgUrl =
    "https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=641708822,1181531870&fm=58";
  await User.create(user);
  return "ok";
}

/**
 * 根据用户名获取用户信息
 * @param user
 * @returns {Promise<*>}
 */
async function getUserInfo(username) {
  let res = await User.findOne(
    { username: username },
    { _id: 0, __v: 0, role: 0, created: 0, password: 0 }
  );
  if (!res || res.n === 0) {
    throw Error(`用户名${username}不存在`);
  }
  return res;
}

/**
 * 根据用户名删除用户
 * @param username
 * @returns {Promise<void>}
 */
async function deleteByUsername(username) {
  await isUserExists(username);
  let res = await User.deleteOne({ username: username });
  if (res < 1) {
    throw Error("删除失败");
  }
}

async function deeteById(id) {}

/**
 * 验证用户名是否存在
 * @param username
 * @returns {Promise<void>}
 */
async function isUserExists(username) {
  let res = await User.findOne({ username: username });
  if (!res || res.n === 0) {
    throw Error("用户名不存在");
  }
}

/**
 * 根据id验证用户是否存在
 * @param id
 * @returns {Promise<void>}
 */
async function isUserExists(id) {
  let res = await User.findOne({ _id: id });
  if (!res || res.n === 0) {
    throw Error("id不存在");
  }
}

module.exports = {
  register,
  deleteByUsername,
  getUserInfo,
  login,
};
