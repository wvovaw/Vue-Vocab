<template>
  <div class="wordCard">
    <h1>This is a wordCard</h1>
  </div>
</template>

<script>
export default {
  name: "WordCard",
  data() {
    return {
      word: "Sample",
      translation: "Пример"
    };
  }
};
</script>

<style scoped lang="scss">
@import "~vue-material/dist/theme/engine";

// @media screen and (min-width: 450px) {
//   .md-card {
//     width: 350px;
//     height: 250px;
//   }
</style>
