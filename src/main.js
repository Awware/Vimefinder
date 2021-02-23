import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loader from '@/components/single/Loader'

import VueCookies from 'vue-cookies'

import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(VueCookies)

Vue.component('Loader', Loader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')