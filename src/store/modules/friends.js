import { getFriendsById, getSessionsByIds } from '@/utils/vimerequests'

//Friends sessions
export default {
  state: {
    friends: void 0
  },
  mutations: {
    setFriends(state, friends) {
      state.friends = friends
    },
    clearFriends(state) {
      state.friends = void 0
    }
  },
  actions: {
    async getFriends({ commit }, id) {
      const { friends } = await getFriendsById(id)

      let fIds = []
      friends.map(friend => fIds.push(friend.id))

      commit('setFriends', await getSessionsByIds(fIds))
    }
  },
  getters: {
    friends: s => s.friends
  }
}
