import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as api from "./api";

import Pagination from "./components/Pagination";

Vue.prototype.$API = api;
Vue.config.productionTip = false;

Vue.component("Pagination", Pagination);

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
