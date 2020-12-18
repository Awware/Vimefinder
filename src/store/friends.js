import { getFriendsById, getSessionsByIds } from '@/utils/vimerequests'

//Friends sessions
export default {
  state: {
    friends: []
  },
  mutations: {
    setFriends(state, friends) {
      state.friends = friends
    },
    clearFriends(state) {
      state.friends = []
    }
  },
  actions: {
    async getFriends({ commit }, id) {
      const rawFriends = (await getFriendsById(id)).friends

      let fIds = []
      rawFriends.map(friend => fIds.push(friend.id))

      commit('setFriends', await getSessionsByIds(fIds))
    }
  },
  getters: {
    friends: s => s.friends
  }
}
