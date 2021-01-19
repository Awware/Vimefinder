import Vue from 'vue'
import Vuex from 'vuex'
import partyfinder from './modules/partyfinder'
import user from './modules/user'
import tabs from './modules/tabs'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  modules: { partyfinder, user, tabs, auth }
})
