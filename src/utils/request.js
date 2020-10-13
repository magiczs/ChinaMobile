import axios from "axios";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

const instance = axios.create({
  baseURL: "/api",
  timeout: 20000,
});

instance.interceptors.request.use((config) => {
  Nprogress.start();
  if (localStorage.getItem("token")) {
    config.headers["token"] = localStorage.getItem("token");
  }
  // config.headers["token"] =
  //   "94f993dbcedd4ed326971081007215e9def974d28814dee6d19201be69bad2085670de0cc38ad112b7aa6f2166436bdc57b12c5807164fa059a78f1bcdb7a0a1";
  return config;
});

instance.interceptors.response.use(
  (result) => {
    Nprogress.done();
    return result.data;
  },
  (error) => {
    Nprogress.done();
    alert("请求失败" + error.message || "未知错误");
    return new Promise(() => {});
  }
);

export default instance;
