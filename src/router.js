import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import User from '@/views/User'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/user/*',
            component: User
        },
        {
            path: '/login',
            component: Login
        }
    ]
})