import axios from 'axios'

const instance = axios.create({
     baseURL: '/api',    //配置请求基础路径
    timeout: 20000, //配置请求超时时间
  });


  //响应拦截器修改响应为直接返回的数据
instance.interceptors.response.use(
    response => {
      //3
      //默认返回去的是response 也就是我们的响应报文信息  如果我们要拿到数据  response.data去获取
      //现在我们是在返回响应之前把响应直接改成了数据，以后我们拿数据不需要再去.data了
      // console.log(response.data.data)
      return response.data
    },
    error => {
      //4、
      alert('发送请求失败：' + error.message || '未知错误')
      //如果你需要进一步去处理这个错误，那么就返回一个失败的promise
      // return Promise.reject(new Error('请求失败')) //new Error('请求失败')自定义错误消息
      //如果你不需要再去处理这个错误，那么就返回一个pending状态的promise（终止promise链）
      return new Promise(() => {})
    }
  );


  export default instance //暴露出去我们的axios工具  后面发请求使用
