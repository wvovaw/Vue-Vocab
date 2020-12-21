<template>
  <div class="dictionary-page">
    <AddWordDialog @toggleDialog="toggleDialog" />
    <EmptyDictionaryState
      @toggleDialog="toggleDialog"
      v-if="dictionary.length === 0"
    />
    <div v-else>
      <md-button @click="toggleDialog" class="md-primary md-raised"
        >Add word</md-button
      >
      <ul>
        <li v-for="entry in dictionary" v-bind:key="entry.entryId">
          Word:
          {{ entry.wordPair.word }}
          Translation:
          {{ entry.wordPair.translation }}
          <!-- {{ wordPair }} -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EmptyDictionaryState from "../components/EmptyDictionaryState";
import AddWordDialog from "../components/AddWordDialog";
export default {
  name: "Dictionary",
  data() {
    return {
      showDialog: false
    };
  },
  methods: {
    toggleDialog() {
      this.showDialog = !this.showDialog;
    }
  },
  components: { EmptyDictionaryState, AddWordDialog },
  computed: {
    dictionary() {
      return this.$store.getters.dictionary;
    }
  }
};
</script>
