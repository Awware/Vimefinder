import Vue from 'vue'
import Vuex from 'vuex'
import partyfinder from './modules/partyfinder'
import user from './modules/user'
import tabs from './modules/tabs'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    success: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    },
    setSuccess(state, suc) {
      state.success = suc
    },
    clearSuccess(state) {
      state.success = null
    }
  },
  getters: {
    error: s => s.error,
    success: s => s.success
  },
  modules: { partyfinder, user, tabs, auth }
})
