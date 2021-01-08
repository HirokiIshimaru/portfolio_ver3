import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FysiDetail from '@/components/detail/fysi_detail.vue'
import FitnessDetail from '@/components/detail/fitness_detail.vue'
import LookclotheDetail from '@/components/detail/lookclothe_detail.vue'
import MamaDetail from '@/components/detail/mama_detail.vue'
import MuleDetail from '@/components/detail/mule_detail.vue'
import PersonaliDetail from '@/components/detail/personali_detail.vue'
import Portfoliov1Detail from '@/components/detail/portfolio-v1_detail.vue'
import Portfoliov2Detail from '@/components/detail/portfolio-v2_detail.vue'
import TuilessDetail from '@/components/detail/tuiless_detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: '石丸大貴 - ポートフォリオサイト'}
  },
  {
    path: '/fysi-detail',
    name: 'fysi-detail',
    component: FysiDetail
  },
  {
    path: '/fitness-detail',
    name: 'fitness-detail',
    component: FitnessDetail
  },
  {
    path: '/lookclothe-detail',
    name: 'lookclothe-detail',
    component: LookclotheDetail
  },
  {
    path: '/mama-detail',
    name: 'mama-detail',
    component: MamaDetail
  },
  {
    path: '/mule-detail',
    name: 'mule-detail',
    component: MuleDetail
  },
  {
    path: '/personali-detail',
    name: 'personali-detail',
    component: PersonaliDetail
  },
  {
    path: '/portfoliov1-detail',
    name: 'portfoliov1-detail',
    component: Portfoliov1Detail
  },
  {
    path: '/fysi-detail',
    name: 'fysi-detail',
    component: Portfoliov2Detail
  },
  {
    path: '/tuiless-detail',
    name: 'tuiless-detail',
    component: TuilessDetail
  },
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
