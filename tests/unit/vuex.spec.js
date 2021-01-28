import { expect } from "chai";
import { store } from "@/store/index";

const entry = {
  id: null,
  wordPair: {
    word: "",
    translation: ""
  }
};

// FIXME: Get vuex tests working
//  ReferenceError: localStorage is not defined
describe("Vuex test", () => {
  it("Adds 1 word to the dictionary. store.dictionary.length = 1", async () => {
    entry.wordPair.word = "TestWord";
    entry.wordPair.translation = "ТестПеревод";
    store.commit("addWord", entry);

    expect(store.state.dictionary.length).to.be.equal(1);
    expect(store.state.dictionary[0].wordPair.word).to.be.equal(
      entry.wordPair.word
    );
    expect(store.state.dictionary[1].wordPair.translation).to.be.equal(
      entry.wordPair.translation
    );
  }),
    it("Adds 10 different words to the dictionary. store.dictionary.length = 11", async () => {
      for (let i = 0; i < 10; i++) {
        entry.wordPair.word = Math.random()
          .toString(36)
          .substring(2, 15);
        entry.wordPair.translation =
          Math.random()
            .toString(36)
            .substring(2, 15) + store.emit("addWord", entry);
      }
    });
});
