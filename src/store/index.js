import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dictionary: localStorage.getItem("dictionary")
      ? JSON.parse(localStorage.getItem("dictionary"))
      : []
  },
  mutations: {
    addWord(state, entry) {
      state.dictionary.push(entry);
      localStorage.setItem("dictionary", JSON.stringify(state.dictionary));
    }
  },
  actions: {
    addWord({ commit }, entry) {
      entry.entryId = new Date().getTime();
      commit("addWord", entry);
    }
  },
  getters: {
    dictionary: s => s.dictionary
  },
  modules: {}
});
