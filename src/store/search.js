import API from "../api/search";
const state = {
  categoryList: {},
};
const mutations = {
  RECEIVECATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
};
const actions = {
  async getCategoryList({ commit }, { sort, wareBrandName }) {
    const result = await API.reqCategoryList(sort, wareBrandName);
    if (result.code === 200) {
      commit("RECEIVECATEGORYLIST", result.data);
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
