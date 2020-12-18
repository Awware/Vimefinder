import Vue from 'vue'
import Vuex from 'vuex'
import partyfinder from './partyfinder'
import user from './user'
import tabs from './tabs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { partyfinder, user, tabs }
})
