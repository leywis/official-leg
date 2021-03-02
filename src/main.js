import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
// 清楚默认样式
import '../static/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
