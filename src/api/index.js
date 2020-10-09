import Ajax from '@/ajax/Ajax'


//请求登录
export const reqLogin = (userInfo) => {
    return Ajax({
      url:'/login',
      method:'post',
      data:userInfo
    })
  }