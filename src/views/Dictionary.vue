<template>
  <div class="dictionary-page">
    <AddWordDialog @toggleDialog="toggleDialog" />
    <SpeedDial
      v-if="$isMobile() && dictionary.length !== 0"
      @toggleDialog="toggleDialog"
    />
    <EmptyDictionaryState
      @toggleDialog="toggleDialog"
      v-if="dictionary.length === 0"
    />
    <div v-else>
      <h1 class="md-title" style="margin-left: 20px">
        My dictionary ({{ dictionary.length }})
      </h1>
      <md-table
        v-model="foundWords"
        md-sort="Word"
        @md-selected="onSelect"
        md-card
      >
        <md-table-toolbar>
          <md-field md-clearable class="md-toolbar-section-start">
            <md-input
              placeholder="Search"
              v-model="searchFilter"
              @input="searchOnTable"
            />
          </md-field>
          <div class="md-toolbar-section-end" v-if="!$isMobile()">
            <md-button class="md-raised" @click="toggleDialog"
              >Add word</md-button
            >
          </div>
        </md-table-toolbar>

        <md-table-toolbar
          slot="md-table-alternate-header"
          slot-scope="{ count }"
        >
          <div class="md-toolbar-section-start">
            {{ getAlternateLabel(count) }}
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button" @click="removeWords">
              <md-icon>delete</md-icon>
            </md-button>
          </div>
        </md-table-toolbar>

        <md-table-empty-state
          md-label="No words found"
          :md-description="
            `No words found for this '${searchFilter}' query. Try a different search term or add a new word.`
          "
        >
          <md-button class="md-primary md-raised" @click="toggleDialog"
            >Add word</md-button
          >
        </md-table-empty-state>

        <md-table-row
          slot="md-table-row"
          slot-scope="{ item }"
          md-selectable="multiple"
          md-auto-select
        >
          <md-table-cell md-label="Word" md-sort-by="wordPair.word">{{
            item.wordPair.word
          }}</md-table-cell>
          <md-table-cell
            md-label="Translation"
            md-sort-by="wordPair.translation"
            >{{ item.wordPair.translation }}</md-table-cell
          >
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>
import EmptyDictionaryState from "../components/EmptyDictionaryState";
import AddWordDialog from "../components/AddWordDialog";
import SpeedDial from "../components/SpeedDial";

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
  components: { EmptyDictionaryState, AddWordDialog, SpeedDial },
  data() {
    return {
      showDialog: false,
      searchFilter: "",
      foundWords: [],
      selected: []
    };
  },
  computed: {
    dictionary() {
      return this.$store.getters.dictionary;
    }
  },
  created() {
    this.foundWords = this.dictionary;
  },
  methods: {
    toggleDialog() {
      this.searchFilter = "";
      this.showDialog = !this.showDialog;
    },
    searchOnTable() {
      this.foundWords = searchByWord(this.dictionary, this.searchFilter);
    },
    onSelect(items) {
      this.selected = items.map(item => item.id);
    },
    getAlternateLabel(count) {
      let plural = "";

      if (count > 1) {
        plural = "s";
      }

      return `${count} word${plural} selected`;
    },
    removeWords() {
      this.$store.dispatch("removeWords", this.selected);
      // TODO: reload table
      this.foundWords = searchByWord(this.dictionary, "");
    }
  }
};
</script>
<style scope lang="scss">
.md-body-2 {
  font-size: 1.5em;
}
</style>
