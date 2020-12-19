import { getMatchesById } from '@/utils/vimerequests'

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
      const { matches } = await getMatchesById(id)
      if (matches.request.size) commit('setMatches', matches)
    },
    async appendMatches({ commit }, id, count, offset) {
      const { matches } = await getMatchesById(id, count, offset)
      if (matches.request.size) commit('appendMatches', matches)
    }
  },
  getters: {
    matches: s => s.matches
  }
}
