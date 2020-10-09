require("./db");

//引入异步处理
require("express-async-errors");
const express = require("express");
//日志打印
const morgan = require("morgan");
//请求体解析
const bodyParser = require("body-parser");
//配置文件
let config = require("./config");

const app = express();

//注册中间件
//注册解析请求体参数的中间件
app.use(express.json());
app.use(express.urlencoded());
//注册log中间件
// app.use(morgan("combined"));
//注册res_mid中间件
app.use(require("./middlewares/res_mid"));
//注册body-parser中间件
app.use(bodyParser.json());
//注册token中间件
app.use(require("./middlewares/token_mid"));
//注册角色中间件
// app.use(require("./middlewares/permission_mid"));

//注册路由
app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/product"));
app.use("/category", require("./routes/category"));
app.use("/order", require("./routes/order"));
app.use("/recommend", require("./routes/recommend"));
app.use("/home", require("./routes/home"));

//注册错误处理中间件
// app.use((err, req, res, next) => {
//   res.fail(err.toString());
// });
app.listen(config.PORT, (err) => {
  if (err) {
    console.log(err, "服务器启动失败");
  } else {
    console.log("服务器启动成功 http://localhost:3005");
  }
});
