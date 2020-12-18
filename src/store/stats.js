import { getStatsById } from '@/utils/vimerequests'

export default {
  state: {
    stats: {}
  },
  mutations: {
    setStats(state, stats) {
      state.stats = stats
    },
    clearStats(state) {
      state.stats = {}
    }
  },
  actions: {
    async getStats({ commit }, id) {
      const stats = await getStatsById(id)
      if (stats) commit('setStats', stats.stats)
    }
  },
  getters: {
    stats: s => s.stats
  }
}
