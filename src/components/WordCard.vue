<template>
  <div class="wordCard">
    <h3>{{ word }}</h3>
    <md-field>
      <label>Translation</label>
      <md-input ref="translation" v-model="userTranslation" />
    </md-field>
    <md-button @click="skipWord">Next</md-button>
    <!-- TODO: Make check button inactive/active depending on input content -->
    <!-- TODO: Add ENTER key -->
    <md-button @click="checkAnswer">Check</md-button>
    <md-snackbar
      :md-position="snack.position"
      :md-duration="snack.duration"
      :md-active.sync="snack.show"
      md-persistent
    >
      <span>{{ snack.message }}</span>
      <md-button class="md-primary" @click="nextWord">Ok</md-button>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: "WordCard",
  props: ["word", "translation"],
  data() {
    return {
      userTranslation: "",
      answerStatus: false,
      snack: {
        show: false,
        duration: Infinity, // Infinity / x ms
        position: "center", //center / left
        message: ""
      }
    };
  },
  methods: {
    checkAnswer() {
      if (
        this.userTranslation.toLowerCase() === this.translation.toLowerCase()
      ) {
        this.snack.message = "Correct!";
        this.snack.show = true;
        this.answerStatus = true; // correct answer
      } else {
        this.snack.message =
          "Incorrect! The correct translation is " + this.translation;
        this.snack.show = true;
        this.answerStatus = false; // wrong answer
      }
    },
    skipWord() {
      this.snack.message = "The translation is " + this.translation;
      this.snack.show = true;
      this.answerStatus = false; // wrong answer
    },
    // Rotate the list of words
    nextWord() {
      this.$emit("answer", this.answerStatus);
      this.userTranslation = "";
      this.snack.show = false;
    }
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
// }
</style>
