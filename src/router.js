import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home')
    },
    {
      path: '/user/:username',
      component: () => import('@/views/User')
    },
    {
      path: '/login',
      component: () => import('@/views/Login')
    },
    {
      path: '/register',
      component: () => import('@/views/Register')
    }
  ]
})
