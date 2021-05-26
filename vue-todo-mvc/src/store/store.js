import Vue from "vue";
import Vuex from "vuex";
import * as getters from './getters'
import * as mutations from './mutations'

//use : Vue의 플러그인
// vue에서 global로 사용할 것을 등록할 때 사용
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters: getters,
  mutations: mutations
});
