<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ word }}</div>
        <div class="md-subhead">{{ translation }}</div>
      </md-card-header-text>
    </md-card-header>
    <md-card-media>
      <!-- <img src="" alt="People" /> -->
    </md-card-media>

    <md-card-actions>
      <md-icon>keyboard_arrow_left</md-icon>
      <md-button>I know</md-button>
      <md-button>Study</md-button>
      <md-icon>keyboard_arrow_right</md-icon>
    </md-card-actions>
  </md-card>
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

@media screen and (min-width: 900px) {
  .md-card {
    width: 600px;
    height: 200px;
  }
}
@media screen and (max-width: 600px) {
  .md-card {
    width: 300px;
    height: 200px;
  }
}
.md-card {
  margin: 4px;
}

.md-subhead {
  font-size: 150%;
}
</style>
