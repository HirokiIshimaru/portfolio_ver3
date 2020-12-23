import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FysiDetail from '@/components/detail/fysi_detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: '石丸大貴 - ポートフォリオサイト'}
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/works',
    name: 'Works',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
  {
    path: '/fysi-detail',
    name: 'fysi-detail',
    component: FysiDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
