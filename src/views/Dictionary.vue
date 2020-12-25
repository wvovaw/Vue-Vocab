<template>
  <div class="dictionary-page">
    <AddWordDialog @toggleDialog="toggleDialog" />
    <EmptyDictionaryState
      @toggleDialog="toggleDialog"
      v-if="dictionary.length === 0"
    />
    <div v-else>
      <md-table
        v-model="foundWords"
        md-card
        md-fixed-heade
        @md-selected="onSelect"
      >
        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">My dictionary ({{ dictionary.length }})</h1>
          </div>

          <md-field md-clearable class="md-toolbar-section-end">
            <md-input
              placeholder="Search"
              v-model="searchFilter"
              @input="searchOnTable"
            />
          </md-field>
        </md-table-toolbar>

        <md-table-row
          slot="md-table-row"
          slot-scope="{ item }"
          md-selectable="multiple"
          md-auto-select
        >
          <!-- not needed with onselect(item, { isFast, $event }) API -->
          <md-table-cell md-label="Word" md-sort-by="word">{{
            item.wordPair.word
          }}</md-table-cell>
          <md-table-cell md-label="Translation" md-sort-by="translation">{{
            item.wordPair.translation
          }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <SpeedDial
      v-if="$isMobile() && dictionary.length !== 0"
      @toggleDialog="toggleDialog"
    />
  </div>
</template>

<script>
import EmptyDictionaryState from "../components/EmptyDictionaryState";
import AddWordDialog from "../components/AddWordDialog";
import SpeedDial from "../components/SpeedDial";

// import { get } from "lodash";

const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByWord = (items, term) => {
  if (term) {
    return items.filter(item =>
      toLower(item.wordPair.word).includes(toLower(term))
    );
  }

  return items;
};

export default {
  name: "Dictionary",
  data() {
    return {
      showDialog: false,
      searchFilter: "",
      foundWords: []
    };
  },
  methods: {
    toggleDialog() {
      this.showDialog = !this.showDialog;
    },
    searchOnTable() {
      this.foundWords = searchByWord(this.dictionary, this.searchFilter);
    }
  },
  components: { EmptyDictionaryState, AddWordDialog, SpeedDial },
  computed: {
    dictionary() {
      return this.$store.getters.dictionary;
    }
  },
  created() {
    this.foundWords = this.dictionary;
  }
};
</script>
<style scope lang="scss">
.md-body-2 {
  font-size: 1.5em;
}
</style>
