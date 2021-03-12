import { authUser, authBySession, logoutAuthUser } from '@/utils/vimerequests'
import Vue from 'vue'
import router from '@/router'
export default {
  state: {
    authUser: null
  },
  mutations: {
    setAuthUser(state, user) {
      state.authUser = user
    },
    clearAuthUser(state) {
      state.authUser = null
    }
  },
  actions: {
    async logout({ commit }, session) {
      commit('clearAuthUser')
      Vue.$cookies.remove('session')
      //console.log('Session Token: ', session)
      await logoutAuthUser(session)
    },
    async returnToSession({ commit }, session) {
      try {
        // console.log('Session: ' + session)
        const usr = await authBySession(session)
        if (!usr.expiredOrNotFound) {
          commit('setAuthUser', {
            username: usr.username,
            id: usr.userid,
            permission: usr.permission,
            token: session
          })
        } else {
          commit('setError', 'Сессия устарела или была не найдена!')
          Vue.$cookies.remove('session')
        }
      } catch {
        commit('setError', 'Что-то пошло не так.')
      }
    },
    async auth({ commit }, { apiKey, password }) {
      try {
        const authResp = await authUser(apiKey, password)

        if (authResp.done) {
          commit('setAuthUser', {
            username: authResp.username,
            id: authResp.userid,
            permission: authResp.permission,
            token: authResp.token
          })
          Vue.$cookies.set('session', authResp.token, '15d')
          router.push('/')
        }
        const type = authResp.done ? 'setSuccess' : 'setError'
        commit(type, authResp.message)
      } catch {
        commit('setError', 'Что-то пошло не так')
      }
    }
  },
  getters: {
    authUser: s => s.authUser
  }
}
