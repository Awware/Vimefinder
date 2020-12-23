import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: {
        layout: 'main'
      },
      component: () => import('@/views/Home')
    },
    {
      path: '/user/:username',
      meta: {
        layout: 'main'
      },
      component: () => import('@/views/User')
    },
    {
      path: '/login',
      meta: {
        layout: 'empty'
      },
      component: () => import('@/views/Login')
    },
    {
      path: '/register',
      meta: {
        layout: 'empty'
      },
      component: () => import('@/views/Register')
    }
  ]
})
