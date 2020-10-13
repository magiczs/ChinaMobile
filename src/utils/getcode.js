import axios from "axios";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

const getCode = axios.create({
  baseURL: "/code",
  timeout: 20000,
});

getCode.interceptors.request.use((config) => {
  Nprogress.start();
  config.headers["Authorization"] =
    "OGEyMTZkYTg3NGFmNWZmZjAxNzUxMjFiZjIyMzIwMDA6MjAxNDA0MTYxNDIwMzA=";
  return config;
});

getCode.interceptors.response.use(
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

export default getCode;
