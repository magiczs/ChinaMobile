import request from "../../utils/request";
import getCode from "../../utils/getcode";

export default {
  //创建订单
  reqTradeInfo(spuInfo) {
    return request({
      url: "/order",
      method: "post",
      data: spuInfo,
    });
  },

  //查询订单信息
  reqPayInfo(orderNo) {
    return request({
      url: `/order/${orderNo}`,
      method: "get",
    });
  },

  //支付订单
  reqOrderStatus(orderId) {
    return request({
      url: "/order/pay",
      method: "post",
      data: orderId,
    });
  },

  //发送验证码
  reqCode(code) {
    // let isCode = Math.floor((Math.random() * 9 + 1) * 100000);
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
};
