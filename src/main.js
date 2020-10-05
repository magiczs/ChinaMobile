import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount('#app')
