import Vue          from 'vue'
import Router       from 'vue-router'
import store        from '@/store'
import cookies      from 'vue-cookies'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      meta: {
        layout: 'main'
      },
      component: () => import('@/views/Home')
    },
    {
      name: 'User',
      path: '/user/:username',
      meta: {
        layout: 'main'
      },
      component: () => import('@/views/User')
    },
    {
      name: 'Login',
      path: '/login',
      meta: {
        layout: 'empty'
      },
      component: () => import('@/views/Login')
    },
    {
      name: 'Profile',
      path: '/profile',
      meta: {
        layout: 'main'
      },
      component: () => import('@/views/Profile')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (cookies.isKey('session') && !store.getters['authUser']) {
    await store.dispatch('returnToSession', cookies.get('session'))
  }
  if (to.name === 'Profile' && !store.getters['authUser']) {
    next('/login')
  } else next()
})

export default router
