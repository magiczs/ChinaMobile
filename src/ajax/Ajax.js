import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',    //配置请求基础路径
    timeout: 20000, //配置请求超时时间
  });

  export default instance //暴露出去我们的axios工具  后面发请求使用
