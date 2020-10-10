// 请求模块
//二次封装axios
//返回的响应数据直接从response.data中拿到数据
//统一处理错误请求

import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//创建axios实例
const instance = axios.create({
  baseUrl: '/api',
  timeout: 20000, //配置请求超时时间
})
//请求拦截器响应拦截qi
instance.interceptors.request.use((config) => {
  NProgress.start()
  return config
})
instance.interceptors.response.use(
  (response) => {
    NProgress.done()
    return response.data
  },
  (error) => {
    NProgress.done()
    alert('发送请求失败:' + error.message || '未知错误')
    return new Promise(() => {})
  }
)
//暴漏出去instance
export default instance
