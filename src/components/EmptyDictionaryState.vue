<template>
  <div>
    <md-empty-state
      md-icon="book"
      md-label="Add some words"
      md-description="Your dictionary is empty. Add new one."
    >
      <md-button class="md-primary md-raised" @click="toggleDialog"
        >Add word</md-button
      >
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: "EmptyDictionaryState",
  methods: {
    toggleDialog() {
      this.$emit("toggleDialog");
    }
  }
};
</script>

<style scoped lang="scss">
@import "~vue-material/dist/theme/engine";
</style>
