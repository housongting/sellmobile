import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsMenu: [] //菜单
  },
  mutations: {
    setgoodsMenu(state, data) {
      state.goodsMenu = data;
    }
  },
  actions: {},
  modules: {}
})