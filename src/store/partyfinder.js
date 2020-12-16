import { getPartyMembers } from '@/vimerequests'
export default {
  state: {
    parties: [],
    error: ''
  },
  mutations: {
    setParties(state, parties) {
      state.parties = parties
    },
    setError(state, error) {
      state.error = error
    },
    clearParties(state) {
      state.parties = []
    },
    clearError(state) {
      state.error = ''
    }
  },
  actions: {
    async getParties({ commit }, id) {
      try {
        const parties = await getPartyMembers(id)
        if (parties.message) commit('setError', parties.message)
        else commit('setParties', parties)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    parties: s => s.parties,
    error: s => s.error
  }
}
