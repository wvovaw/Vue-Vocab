<template>
  <md-toolbar class="md-accent" md-elevation="1">
    <h3 class="md-title" style="flex: 1">Voc</h3>
    <router-link to="/" exact active-class="md-active">
      <md-button class="md-primary">Home</md-button>
    </router-link>

    <router-link to="/dictionary" exact active-class="md-active">
      <md-button class="md-primary">Dictionary</md-button>
    </router-link>

    <router-link to="/learn" exact active-class="md-active">
      <md-button class="md-primary">Learn</md-button>
    </router-link>
  </md-toolbar>
</template>

<script>
export default {
  name: "ContentActions"
};
</script>

<style scoped lang="scss">
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>
