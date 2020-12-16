import { getFriendsById, getSessionsByIds } from '@/vimerequests'

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

      const friends = await getSessionsByIds(fIds)
      commit('setFriends', friends)
    }
  },
  getters: {
    friends: s => s.friends
  }
}
