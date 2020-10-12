import Ajax from "../../ajax/Ajax";

export default {
  reqCategoryList(sort, wareBrandName, limit, page) {
    return Ajax({
      url: `/product/getProducts?page=${page}&limit=${limit}&sort=${sort}`,
      method: "post",
      data: {
        wareBrandName,
      },
    });
  },
};
