import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  content: 'Component B'
}

const mutations = {}

const actions = {}

const getters = {
  getContent: state => state.content
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})