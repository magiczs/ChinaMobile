import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './validate'
import * as api from './api'
import {Message} from 'element-ui'

Vue.prototype.$API = api;
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
