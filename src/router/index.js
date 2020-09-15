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
  },
  /* 信息录入 */
  {
    path: '/informationEntry',
    name: 'informationEntry',
    component: () => import('../views/InformationEntry')
  },
  /* 人员信息 */
  {
    path: '/PeopleInformation',
    name: 'PeopleInformation',
    component: () => import('../views/PeopleInformation.vue')
  },
  /* 通知公告 */
  {
    path: '/noticeAndAnnouncement',
    name: 'noticeAndAnnouncement',
    component: () => import('../views/noticeAndAnnouncement.vue')
  },
  /* 发布通知公告 */
  {
    path: '/makeAnAnnouncement',
    name: 'makeAnAnnouncement',
    component: () => import('../views/makeAnAnnouncement.vue')
  },
  /* 通知公告details */
  {
    path: '/noticeAndAnnouncementDetails',
    name: 'noticeAndAnnouncementDetails',
    component: () => import('../views/noticeAndAnnouncementDetails.vue')
  },
  /* 编辑通知公告 */
  {
    path: '/noticeAndAnnouncementEdit',
    name: 'noticeAndAnnouncementEdit',
    component: () => import('../views/noticeAndAnnouncementEdit.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
