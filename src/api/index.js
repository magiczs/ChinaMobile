import request from "../utils/request";

export const reqTradeInfo = (spuInfo) => {
  return request({
    url: "/order",
    method: "post",
    data: spuInfo,
  });
};
