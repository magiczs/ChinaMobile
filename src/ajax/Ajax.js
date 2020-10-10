import axios from "axios";

const instace = axios.create({
  baseURL: "/api", //配置请求基础路径
  timeout: 20000, //配置请求超时时间
});

// 请求拦截器和响应拦截器
instace.interceptors.request.use((config) => {
  return config;
});

instace.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    alert("发送请求失败：" + error.message || "未知错误");
    return new Promise(() => {});
  }
);

export default instace;
