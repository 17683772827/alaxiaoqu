import Vue from 'vue'
import VueRouter from 'vue-router'
/* import Home from '../views/Home.vue' */
/* import login from "../views/login" */

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/login'
  },
  /* 登录 */
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  /* 首页 */
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
