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
      const { matches, request } = await getMatchesById(id)
      if (request.size) commit('setMatches', matches)
    },
    async appendMatches({ commit }, id, count, offset) {
      const { matches, request } = await getMatchesById(id, count, offset)
      if (request.size) commit('appendMatches', matches)
    }
  },
  getters: {
    matches: s => s.matches
  }
}
