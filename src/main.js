import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 默认请求的基础url（如果axios请求的地址不带域名，自动添加baseURL）（默认请求域名，/当前域名）
// axios.defaults.baseURL = 'http://127.0.0.1:8888'
axios.defaults.baseURL = 'http://10.21.63.25:18080'
// axios.defaults.baseURL = 'http://10.21.209.136:18080'
// 设置post请求头的content-Type值
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 请求超时5000毫秒
// axios.defaults.timeout = 5000;

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
