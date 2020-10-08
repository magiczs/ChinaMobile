import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Message } from "element-ui";

Vue.config.productionTip = false;
Vue.prototype.$message = Message;
new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
