import request from '@/utils/request'


//请求登录
export default {
  reqLogin(userInfo){
    return request({
      url:'/user/login',
      method:'post',
      data:userInfo
    })
  }
}