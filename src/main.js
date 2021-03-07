import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
// 清楚默认样式
import '../static/css/reset.css'
import 'hover.css'

import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'UPB6P9kHaT9Xhr8LNdOEmwY0u0BFGSqq',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
