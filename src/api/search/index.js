import Ajax from "../../ajax/Ajax";

export default {
  reqCategoryList(from) {
    let { page, limit, sort, searchinfo } = from;
    // console.log(page, limit, sort, searchinfo);
    return Ajax({
      url: `/api/product/getProducts?page=${page}&limit=${limit}&sort=${sort}`,
      method: "post",
      data: searchinfo,
    });
  },
};
