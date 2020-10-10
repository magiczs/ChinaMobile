import Ajax from "../../ajax/Ajax";

export default {
  reqCategoryList() {
    return Ajax({
      url: "/product/getProducts?page=1&limit=13",
      method: "post",
    });
  },
};
