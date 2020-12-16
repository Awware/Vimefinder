import session from './session'
import friends from './friends'
import matches from './matches'
import stats from './stats'
import guild from './guild'

import { getRawUser } from '@/vimerequests'

export default {
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    clearUser(state) {
      state.user = {}
    }
  },
  actions: {
    //Get `raw` user
    async getUser({ commit }, username) {
      const rawUser = (await getRawUser(username))[0]
      if (rawUser) {
        const user = {
          username,
          lastSeen: rawUser.lastSeen,
          level: rawUser.level,
          id: rawUser.id,
          lvlperc: rawUser.levelPercentage,
          guild: rawUser.guild,
          hours: (rawUser.playedSeconds / 60 / 60).toFixed(1),
          rank: rawUser.rank
        }
        commit('setUser', user)
      }
    }
  },
  getters: {
    user: s => s.user
  },
  modules: { session, friends, matches, stats, guild }
}
