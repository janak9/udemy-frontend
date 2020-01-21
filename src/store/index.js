import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth_token: 'ss'
  },
  getters: {
    auth_token(state){
      return state.auth_token;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
