<template>
  <md-speed-dial md-direction="top" class="md-bottom-right md-fixed">
    <md-speed-dial-target>
      <md-icon>add</md-icon>
    </md-speed-dial-target>

    <md-speed-dial-content>
      <md-button class="md-icon-button" @click="toggleDialog">
        <md-icon>add</md-icon>
      </md-button>
    </md-speed-dial-content>
  </md-speed-dial>
</template>

<script>
export default {
  name: "SpeedDial",
  methods: {
    toggleDialog() {
      this.$emit("toggleDialog");
    }
  }
};
</script>

<style scoped lang="scss"></style>
