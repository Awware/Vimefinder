import { getPartyMembers } from '@/utils/vimerequests'
export default {
  state: {
    parties: [],
    partyMessage: ''
  },
  mutations: {
    setParties(state, parties) {
      state.parties = parties
    },
    setPartyMessage(state, partyMessage) {
      state.partyMessage = partyMessage
    },
    clearParties(state) {
      state.parties = []
    },
    clearPartyMessage(state) {
      state.partyMessage = ''
    }
  },
  actions: {
    async getParties({ commit }, id) {
      try {
        const parties = await getPartyMembers(id)
        if (parties.message) commit('setPartyMessage', parties.message)
        else commit('setParties', parties)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    parties: s => s.parties,
    partyMessage: s => s.partyMessage
  }
}
