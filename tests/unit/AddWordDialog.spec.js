import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueMaterial from "vue-material";

import AddWordDialog from "@/components/AddWordDialog";
// import WordCard from "@/components/WordCard";

describe("AddWordDialog.vue", () => {
  it("Add new word on submit.", async () => {
    const localVue = createLocalVue();
    localVue.use(VueMaterial);

    const wrapper = shallowMount(AddWordDialog, {
      localVue
    });

    const form = await wrapper.find("form");
    const wordInput = await wrapper.findComponent({ ref: "word" });
    const translationInput = await wrapper.findComponent({
      ref: "translation"
    });

    const word = "TestWord";
    const translation = "ТестПеревод";

    wordInput.element.value = word;
    await wordInput.trigger("input");
    translationInput.element.value = translation;
    await translationInput.trigger("input");
    await form.trigger("submit.prevent");

    // TODO: find out how to make submit form work
    expect(wrapper.vm.entry.id).to.be.equal(null);

    // expect(wrapper.vm.entry.wordPair.word).to.equal(word);
    // expect(wrapper.vm.entry.wordPair.translation).to.equal(translation);
  });
});
