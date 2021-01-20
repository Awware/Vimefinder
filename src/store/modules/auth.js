import { authUser, authBySession, logoutAuthUser } from '@/utils/vimerequests'
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
      await logoutAuthUser(session)
    },
    async returnToSession({ commit }, session) {
      try {
        console.log(session)
        const usr = await authBySession(session)
        if (!usr.expiredOrNotFound) {
          commit('setAuthUser', {
            username: usr.username,
            id: usr.id
          })
          commit('setSuccess', 'Сессия успешно восстановлена!')
        } else {
          commit('setError', 'Сессия устарела или была не найдена!')
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
            id: authResp.id,
            token: authResp.token
          })
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
