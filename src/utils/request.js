import axios from "axios";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

const instance = axios.create({
  baseURL: "/api",
  timeout: 20000,
});

instance.interceptors.request.use((config) => {
  Nprogress.start();
  // if (localStorage.getItem("token")) {
  //   config.headers["token"] = localStorage.getItem("token");
  // }
  config.headers["token"] =
    "e4eb4e9e12fa41bac75d3fa95e6e1fec4d87366182cd62dd1f1c4dff1c55028ce8a45161af5804c0cf0a930037b73fa1";
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
