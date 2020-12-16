import { getSessionById } from '@/vimerequests'

export default {
  state: {
    session: {}
  },
  mutations: {
    setSession(state, session) {
      state.session = session
    },
    clearSession(state) {
      state.session = {}
    }
  },
  actions: {
    async getSession({ commit }, id) {
      const rawSession = await getSessionById(id)
      const session = {
        online: rawSession.online.value,
        onlineMsg: rawSession.online.message
      }
      commit('setSession', session)
    }
  },
  getters: {
    session: s => s.session
  }
}
