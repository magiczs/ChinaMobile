import request from "@/utils/request";
export default {
  getDetailPages(spuId) {
    return request.get(`/product/getProductInfo/${spuId}`);
  },
  getRecommend() {
    return request.get(`/recommend/getRecommendInfo`);
  },
};
