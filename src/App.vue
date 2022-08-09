<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
body {
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  // overflow: hidden;
  position: relative;
}
</style>
