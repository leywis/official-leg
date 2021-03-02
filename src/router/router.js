import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由配置
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    title: '首页',
    component: () => import('../pages/home'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router