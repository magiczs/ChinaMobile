//接口函数文件
import ajax from "../../ajax/Ajax";
// console.log(ajax.get)
// console.log(ajax)

//请求home页数据
export default {
  home() {
    return ajax({
      url: "/api/home",
      method: "get",
    });
  },
  cateGoryList() {
    return ajax({
      url: "api/category",
      method: "get",
    });
  },
};
