import { getMatchesById } from '@/vimerequests'

export default {
  state: {
    matches: []
  },
  mutations: {
    setMatches(state, matches) {
      state.matches = matches
    },
    appendMatches(state, matches) {
      state.matches = state.matches.concat(matches)
    },
    clearMatches(state) {
      state.matches = []
    }
  },
  actions: {
    async getMatches({ commit }, id) {
      const matches = await getMatchesById(id)
      if (matches.request.size) commit('setMatches', matches.matches)
    },
    async appendMatches({ commit }, id, count, offset) {
      const recMatches = await getMatchesById(id, count, offset)
      if (recMatches.request.size) commit('appendMatches', recMatches.matches)
    }
  },
  getters: {
    matches: s => s.matches
  }
}
