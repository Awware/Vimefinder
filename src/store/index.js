import Vue from 'vue'
import Vuex from 'vuex'
import partyfinder from './partyfinder'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  modules: { partyfinder, user }
})
