<template>
  <md-dialog
    :md-active.sync="this.$parent.showDialog"
    :md-click-outside-to-close="false"
    :md-close-on-esc="false"
    :md-fullscreen="false"
  >
    <md-dialog-title>Add word</md-dialog-title>
    <form novalidate class="md-layout" @submit.prevent="saveData">
      <md-field :class="isInvalid(emptyWord)">
        <label>Word</label>
        <md-input
          ref="word"
          id="focusme"
          v-model="entry.wordPair.word"
          required
        ></md-input>
      </md-field>
      <md-field :class="isInvalid(emptyTranslation)">
        <label>Translation</label>
        <md-input
          ref="translation"
          v-model="entry.wordPair.translation"
          required
        ></md-input>
      </md-field>
      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog">Cancel</md-button>
        <md-button type="submit" class="md-primary">Save</md-button>
      </md-dialog-actions>
    </form>
  </md-dialog>
</template>

<script>
export default {
  name: "AddWordDialog",
  data() {
    return {
      // TODO: Implement word progress; Implement translation list
      entry: {
        id: null,
        wordPair: {
          word: "",
          translation: ""
        }
      },
      emptyWord: false,
      emptyTranslation: false
    };
  },
  methods: {
    isInvalid(invalidFlag) {
      return {
        "md-invalid": invalidFlag
      };
    },
    closeDialog() {
      this.$emit("toggleDialog");
      // Clean fields
      this.entry = {
        id: null,
        wordPair: {
          word: "",
          translation: ""
        }
      };
      this.emptyWord = this.emptyTranslation = false;
    },
    saveData() {
      if (this.entry.wordPair.word && this.entry.wordPair.translation) {
        // Capitalize 1st letters, decapitalize the rest
        this.entry.wordPair.word =
          this.entry.wordPair.word.charAt(0).toUpperCase() +
          this.entry.wordPair.word.slice(1).toLowerCase();

        this.entry.wordPair.translation =
          this.entry.wordPair.translation.charAt(0).toUpperCase() +
          this.entry.wordPair.translation.slice(1).toLowerCase();

        // Add the entry in dictionary
        this.$store.dispatch("addWord", this.entry);
        // Close dialog
        this.closeDialog();
      } else {
        // Else highlight empty fields
        if (!this.entry.wordPair.word) this.emptyWord = true;
        if (!this.entry.wordPair.translation) this.emptyTranslation = true;
      }
    }
  },
  destroyed() {
    if (this.entry && this.entry.destroy) {
      this.entry.destroy();
    }
  }
};
</script>

<style scoped lang="scss">
.md-field {
  margin: 20px;
}
</style>
