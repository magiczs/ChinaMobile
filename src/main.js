import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入element-ui
import { Input } from 'element-ui'
Vue.use(Input)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount('#app')
