<template>
  <div class="wordCard">
    <h3>{{ word }}</h3>
    <md-field>
      <label>Translation</label>
      <md-input
        id="focusme"
        ref="translation"
        v-model="userTranslation"
        v-on:keyup.enter="enterPressed"
        required
      />
    </md-field>
    <md-button @click="skipWord">Next</md-button>
    <md-button :disabled="userTranslation.length < 1" @click="checkAnswer"
      >Check</md-button
    >
    <md-snackbar
      :md-position="snack.position"
      :md-duration="snack.duration"
      :md-active.sync="snack.show"
      md-persistent
    >
      <span>{{ snack.message }}</span>
      <md-button class="md-primary" @click="nextWord">Next</md-button>
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
      isAnswerCorrect: false,
      checkStatus: 0,
      snack: {
        show: false,
        duration: Infinity, // Infinity / x ms
        position: "center", //center / left
        message: ""
      }
    };
  },
  methods: {
    isInvalid(invalidFlag) {
      return {
        "md-invalid": invalidFlag
      };
    },
    enterPressed() {
      if (this.userTranslation.length < 1) return;
      if (this.checkStatus === 0) {
        this.checkStatus = 1;
        this.checkAnswer();
      } else if (this.checkStatus === 1) {
        this.checkStatus = 0;
        this.nextWord();
      }
    },
    checkAnswer() {
      if (
        this.userTranslation.toLowerCase() === this.translation.toLowerCase()
      ) {
        this.snack.message = "Correct!";
        this.snack.show = true;
        this.isAnswerCorrect = true; // correct answer
      } else {
        this.snack.message =
          "Incorrect! The correct translation is " + this.translation;
        this.snack.show = true;
        this.isAnswerCorrect = false; // wrong answer
      }
    },
    skipWord() {
      this.snack.message = "The translation is " + this.translation;
      this.snack.show = true;
      this.isAnswerCorrect = false; // wrong answer
    },
    // Rotate the list of words
    nextWord() {
      this.$emit("answer", this.isAnswerCorrect);
      this.userTranslation = "";
      this.snack.show = false;
    }
  },
  mounted: function() {
    setTimeout(() => {
      document.getElementById("focusme").focus();
    }, 200);
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
