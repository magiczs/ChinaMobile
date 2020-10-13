import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './validate'
import * as api from './api'
import { Message } from 'element-ui'
import 'swiper/css/swiper.css'

//图片懒加载的插件
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/timg.gif'
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload, {
  // 内部自定义了一个指令lazy
  loading, // 指定未加载得到图片之前的loading图片
})

Vue.prototype.$API = api
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount('#app')
