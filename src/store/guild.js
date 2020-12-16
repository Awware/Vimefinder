import { getSessionsByIds, getGuildById } from '@/vimerequests'

export default {
  state: {
    guild: {},
    members: {}
  },
  mutations: {
    setMembers(state, members) {
      state.members = members
    },
    clearMembers(state) {
      state.members = {}
    },
    setGuild(state, guild) {
      state.guild = guild
    },
    clearGuild(state) {
      state.guild = {}
    }
  },
  actions: {
    async getGuildAndMembers({ commit }, id) {
      const gettedGuild = await getGuildById(id)
      if (gettedGuild) {
        let ids = []
        gettedGuild.members.map(member => ids.push(member.user.id))

        let customMembers = []

        const sessions = await getSessionsByIds(ids)

        gettedGuild.members.forEach((a, i) => {
          customMembers.push({
            username: a.user.username,
            rank: a.user.rank,
            online: sessions[i].online,
            status: a.status
          })
        })
        commit('setMembers', customMembers)
        commit('setGuild', gettedGuild)
      }
    }
  },
  getters: {
    guild: s => s.guild,
    members: s => s.members
  }
}
