import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import home from "./home";

const state = {};
const mutations = {};
const actions = {};
const getters = {};

import search from "./search";
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    search,
  },
});
