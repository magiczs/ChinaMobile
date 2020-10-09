import Ajax from '@/ajax/Ajax'


//请求登录
export const reqLogin = (userInfo) => {
    return Ajax({
      url:'/user/login',
      method:'post',
      data:userInfo
    })
  }

