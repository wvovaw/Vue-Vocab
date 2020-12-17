<template>
  <div>
    <md-dialog :md-active.sync="this.$parent.showDialog">
      <md-dialog-title>Add word</md-dialog-title>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog()">Close</md-button>
        <md-button class="md-primary" @click="saveData">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: "AddWordDialog",
  data() {
    return {
      word: "",
      translation: "",
      chips: null
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    saveData() {
      this.$emit("closeDialog");
    }
  }
};
</script>

<style scoped lang="scss"></style>
