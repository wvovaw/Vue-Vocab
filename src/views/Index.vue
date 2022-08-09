<template>
  <div class="home">
    <div class="md-toolbar md-layout md-gutter">
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <md-card>
          <md-card-header>
            <div class="md-title">
              Add word
              <md-icon>book</md-icon>
            </div>
          </md-card-header>

          <md-card-content>
            Add new word to your dictionary
          </md-card-content>

          <md-card-actions>
            <md-button>Add word</md-button>
          </md-card-actions>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <md-card>
          <md-card-header>
            <div class="md-title">
              Start training
              <md-icon>games</md-icon>
            </div>
          </md-card-header>

          <md-card-content>
            Learn words playing games
          </md-card-content>

          <md-card-actions>
            <md-button>Choose a game</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPageView",
  components: {}
};
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";
@import "~vue-material/src/components/MdAnimation/variables";

.md-layout-item {
  // height: 40px;
  margin-top: 10px;
  margin-bottom: 8px;
  transition: 0.3s $md-transition-stand-timing;

  &:after {
    width: 100%;
    height: 100%;
    display: block;
  }
}
// .page-title,
// .page-description {
//   display: flex;
//   justify-content: center;
// }
</style>
