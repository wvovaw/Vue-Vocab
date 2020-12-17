import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dictionary: JSON.parse(localStorage.getItem("dictionary" || new Map([])))
  },
  mutations: {
    addWord(state, wordPair) {
      state.dictionary.set(wordPair.word, wordPair.translation);
      localStorage.setItem("dictionary", state.dictionary);
    }
  },
  actions: {
    addWord({ commit }, wordPair) {
      commit("addWord", wordPair);
    }
  },
  getters: {
    dictionary: s => s.dictionary
  },
  modules: {}
});
