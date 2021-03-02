import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo) 
export default function vueScrollTo (context, inject) {
  inject('scrollTo', vueScrollTo.scrollTo)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)

  ,created: () => (document.documentElement.setAttribute('lang', 'ja')),
}).$mount('#app')
