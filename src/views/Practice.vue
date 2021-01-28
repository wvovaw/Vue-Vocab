<template>
  <div class="practice-block">
    <md-dialog-confirm
      :md-active.sync="showDialog"
      :md-title="dialog.title"
      :md-content="dialog.content"
      md-confirm-text="Continue pactice"
      md-cancel-text="Go home"
      @md-cancel="$router.push('/')"
      @md-confirm="refreshPractice"
    />
    <p>Progress: {{ progress }}</p>
    <WordCard
      :word="wordPair.word"
      :translation="wordPair.translation"
      @answer="onAnswer"
    />
  </div>
</template>

<script>
import WordCard from "@/components/WordCard";

const randomItems = (arr, count) =>
  arr
    .concat()
    .reduce(
      (p, _, __, arr) =>
        p[0] < count
          ? [
              p[0] + 1,
              p[1].concat(arr.splice((Math.random() * arr.length) | 0, 1))
            ]
          : p,
      [0, []]
    )[1];

export default {
  name: "Practice",
  components: { WordCard },
  /*
   * Take 10 random or definit wordpairs from the dictionary
   */
  data() {
    return {
      progress: 0,
      practiceList: this.getPracticeList(),
      wordPair: {},
      showDialog: false,
      // TODO: Show title and content depending on results
      dialog: {
        title: "Default title",
        content: "Default content"
      }
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.wordPair = this.practiceList[0].wordPair;
    });
  },
  methods: {
    // TODO: After word progress get implemented, rework this
    getPracticeList() {
      let l =
        this.$store.getters.dictionary.length < 10
          ? this.$store.getters.dictionary.length
          : 10;
      return randomItems(this.$store.getters.dictionary, l);
    },
    refreshPractice() {
      this.progress = 0;
      this.practiceList = this.getPracticeList();
      this.wordPair = this.practiceList[0].wordPair;
    },
    onAnswer(status) {
      if (status === false) {
        this.practiceList.push(this.practiceList.splice(0, 1)[0]); // move element in the end of attay
        this.wordPair = this.practiceList[0].wordPair;
      } else if (status === true) {
        // TODO: Increase a word progress if user answers correct
        this.progress += 1;
        this.practiceList.shift(); // Remove practiceList[0]
        if (this.practiceList.length == 0) {
          this.showDialog = true; // Show finish dialog
        } else this.wordPair = this.practiceList[0].wordPair;
      }
    }
  }
};
</script>
<!-- TODO: Make practice page look good -->
<style scoped lang="scss">
.practice-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
</style>
