<template>
  <div class="practice-block">
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
      index: 0,
      wordPair: {}
    };
  },
  computed: {
    wordsToTrain() {
      let l =
        this.$store.getters.dictionary.length < 10
          ? this.$store.getters.dictionary.length
          : 10;
      return randomItems(this.$store.getters.dictionary, l);
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.wordPair = this.wordsToTrain[0].wordPair;
    });
  },
  methods: {
    onAnswer(status) {
      if (status === false) {
        // TODO: Increase a word progress if user answers correct
        this.wordsToTrain.push(this.wordsToTrain.splice(this.index, 1)[0]); // move element in the end of attay
        this.wordPair = this.wordsToTrain[0].wordPair;
      } else if (status === true) {
        this.progress += 1;
        this.wordsToTrain.shift(); // Remove wordsToTrain[0]
        if (this.wordsToTrain.length == 0) {
          window.alert("Finish! You misstaken on words: ", this.misstakes);
          // TODO: Redirect or show stats
        } else this.wordPair = this.wordsToTrain[0].wordPair;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.practice-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  border: 1px black solid;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
</style>
