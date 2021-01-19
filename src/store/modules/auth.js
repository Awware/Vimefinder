import { authUser } from '@/utils/vimerequests'
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
    async auth({ commit }, { login, password }) {
      try {
        const authResp = await authUser(login, password)
        if (authResp) commit('setAuthUser', authResp)
        else commit('setError', 'Возможно некоторые данные были некорректны')
      } catch {
        commit('setError', 'Что-то пошло не так')
      }
    }
  },
  getters: {
    authUser: s => s.authUser
  }
}
