import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css/swiper.css'
import * as API from '@/api'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$API = API
  },
  router,
  render: (h) => h(App),
  store,
}).$mount('#app')
