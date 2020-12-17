<template>
  <div>
    <AddWordDialog @closeDialog="showDialog = false" />
    <md-empty-state
      md-icon="book"
      md-label="Add some words"
      md-description="Your dictionary is empty. Add new one."
    >
      <md-button class="md-primary md-raised" @click="showDialog = true"
        >Add word</md-button
      >
    </md-empty-state>
  </div>
</template>

<script>
import AddWordDialog from "../components/AddWordDialog";
export default {
  name: "EmptyDictionaryState",
  components: { AddWordDialog },
  data() {
    return {
      showDialog: false
    };
  },
  methods: {
    destroyed() {
      if (this.date && this.date.destroy) {
        this.date.destroy();
      }
      if (this.chips && this.chips.destroy) {
        this.chips.destroy();
      }
      if (this.translation && this.translation.destroy) {
        this.translation.destroy();
      }
      if (this.showDialog && this.showDialog.destroy) {
        this.showDialog.destroy();
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~vue-material/dist/theme/engine";
</style>
