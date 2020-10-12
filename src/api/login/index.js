import request from '@/utils/request'
import getCode from '@/utils/getcode'

//请求登录
export default {
  reqLogin(userInfo){
    return request({
      url:'/user/login',
      method:'post',
      data:userInfo
    })
  },
  //发送验证码
  reqCode(code) {
    let { isCode, phone } = code;
    let data = {
      to: phone,
      appId: "8a216da874af5fff0175121bf30a2007",
      templateId: 1,
      datas: [isCode, 1],
    };
    JSON.stringify(data);
    return getCode({
      url:
        "/2013-12-26/Accounts/8a216da874af5fff0175121bf2232000/SMS/TemplateSMS?sig=5C46E66342074E93EC30A1EC45123C37",
      method: "post",
      data: data,
    });
  },

}

