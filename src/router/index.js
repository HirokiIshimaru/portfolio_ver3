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

// デプロイ
// const eccPath = "/ecc/hisimaru/";
// const routes = [
//   {
//     path: eccPath,
//     name: 'Home',
//     component: Home,
//     meta: {title: '石丸大貴 - ポートフォリオサイト'}
//   },
//   {
//     path: eccPath+'fysi-detail/',
//     name: 'fysi-detail',
//     component: FysiDetail,
//     meta: { transition: 'overlay-left-full' },
//   },
//   {
//     path: eccPath+'fitness-detail',
//     name: 'fitness-detail',
//     component: FitnessDetail,
//     meta: { transition: 'overlay-left-full' },
//   },
//   {
//     path: eccPath+'lookclothe-detail',
//     name: 'lookclothe-detail',
//     component: LookclotheDetail,
//     meta: { transition: 'overlay-left-full' },
//   },
//   {
//     path: eccPath+'mama-detail',
//     name: 'mama-detail',
//     component: MamaDetail,
//     meta: { transition: 'overlay-left-full' },
//   },
//   {
//     path: eccPath+'mule-detail',
//     name: 'mule-detail',
//     component: MuleDetail,
//     meta: { transition: 'overlay-left-full' },
//   },
//   {
//     path: eccPath+'personali-detail',
//     name: 'personali-detail',
//     component: PersonaliDetail,
//     meta: { transition: 'overlay-left-full' },
//   },
//   {
//     path: eccPath+'portfoliov1-detail',
//     name: 'portfoliov1-detail',
//     component: Portfoliov1Detail,
//     meta: { transition: 'overlay-left-full' },
//   },
//   {
//     path: eccPath+'portfoliov2-detail',
//     name: 'portfoliov2-detail',
//     component: Portfoliov2Detail,
//     meta: { transition: 'overlay-left-full' },
//   },
//   {
//     path: eccPath+'fysi-detail',
//     name: 'fysi-detail',
//     component: Portfoliov2Detail,
//     meta: { transition: 'overlay-left-full' },
//   },
//   {
//     path: eccPath+'tuiless-detail',
//     name: 'tuiless-detail',
//     component: TuilessDetail,
//     meta: { transition: 'overlay-left-full' },
//   },
// ]
// ローカルよう
const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    meta: {title: '石丸大貴 - ポートフォリオサイト'},
  },
  {
    path: '/fysi-detail',
    name: 'fysi-detail',
    component: FysiDetail,
    meta: { transition: 'overlay-left-full' },
  },
  {
    path: '/fitness-detail',
    name: 'fitness-detail',
    component: FitnessDetail,
    meta: { transition: 'overlay-left-full' },
  },
  {
    path: '/lookclothe-detail',
    name: 'lookclothe-detail',
    component: LookclotheDetail,
    meta: { transition: 'overlay-left-full' },
  },
  {
    path: '/mama-detail',
    name: 'mama-detail',
    component: MamaDetail,
    meta: { transition: 'overlay-left-full' },
  },
  {
    path: '/mule-detail',
    name: 'mule-detail',
    component: MuleDetail,
    meta: { transition: 'overlay-left-full' },
  },
  {
    path: '/personali-detail',
    name: 'personali-detail',
    component: PersonaliDetail,
    meta: { transition: 'overlay-left-full' },
  },
  {
    path: '/portfoliov1-detail',
    name: 'portfoliov1-detail',
    component: Portfoliov1Detail,
    meta: { transition: 'overlay-left-full' },
  },
  {
    path: '/portfoliov2-detail',
    name: 'portfoliov2-detail',
    component: Portfoliov2Detail,
    meta: { transition: 'overlay-left-full' },
  },
  {
    path: '/tuiless-detail',
    name: 'tuiless-detail',
    component: TuilessDetail,
    meta: { transition: 'overlay-left-full' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },
  scrollBehavior () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})

export default router
