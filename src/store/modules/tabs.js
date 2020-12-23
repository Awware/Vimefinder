export default {
  state: {
    tabIndex: 1
  },
  mutations: {
    setTabIndex(state, index) {
      state.tabIndex = index
    },
    setDefaultIndex(state) {
      state.tabIndex = 1
    }
  },
  getters: {
    _tabIndex: s => s.tabIndex
  }
}
