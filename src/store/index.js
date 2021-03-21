import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsMenu: [], //菜单
    shopMsg: [],
    list: [{
        name: "张三",
        age: 18
      },
      {
        name: "张三2",
        age: 68
      },
      {
        name: "张三3",
        age: 6
      },
      {
        name: "张三4",
        age: 2
      },
      {
        name: "张三5",
        age: 36
      },
      {
        name: "张三6",
        age: 89
      },
    ]
  },
  mutations: {
    setgoodsMenu(state, data) {
      state.goodsMenu = data;
    },
    setshopMsg(state, data) {
      var dataT = state.goodsMenu;
      for (let iterator of dataT) {
        for (let food of iterator.medilsArr) {
          if (food.medilsName == data.medilsName) {
            food.number += data.a
          }
        }
      }
    }
  },
  actions: {},
  modules: {},
  getters: { //相当于computed
    getshopMsg(state) {
      var dataT = state.goodsMenu;
      var arr = [];
      var nameARR = [];
      for (let iterator of dataT) {
        for (let food of iterator.medilsArr) {
          if (food.number > 0) {
            if (nameARR.indexOf(food.medilsName) == -1) { //数组去重
              nameARR.push(food.medilsName);
              arr.push(food);
            }
          }
        }
      }
      return arr
    },
    getage(state) {
       return state.list.filter((obj)=>{
            return obj.age>16
        })
      
    }
  }
})