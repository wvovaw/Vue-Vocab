<template>
  <div>
    <!-- TODO: Change behaviour on ESC and out of border click -->
    <md-dialog :md-active.sync="this.$parent.showDialog">
      <md-dialog-title>Add word</md-dialog-title>
      <form novalidate class="md-layout" @submit.prevent="saveData">
        <md-field>
          <label>Word</label>
          <md-input v-model="entry.wordPair.word"></md-input>
        </md-field>
        <md-field>
          <label>Translation</label>
          <md-input v-model="entry.wordPair.translation"></md-input>
        </md-field>
        <md-dialog-actions>
          <md-button class="md-primary" @click="closeDialog">Cancel</md-button>
          <md-button type="submit" class="md-primary">Save</md-button>
        </md-dialog-actions>
      </form>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: "AddWordDialog",
  data() {
    return {
      entry: {
        entryId: null,
        wordPair: {
          word: "",
          translation: ""
        }
      }
    };
  },
  methods: {
    closeDialog() {
      this.$emit("toggleDialog");
    },
    saveData() {
      if (this.entry.wordPair.word && this.entry.wordPair.translation)
        this.$store.dispatch("addWord", this.entry);
      // else {} Else highlight empty fields etc.
      this.entry = {
        entryId: null,
        wordPair: {
          word: "",
          translation: ""
        }
      };
      this.$emit("toggleDialog");
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
