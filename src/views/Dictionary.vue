/* eslint-disable prettier/prettier */
<template>
  <div class="dictionary-page">
    <AddWordDialog @toggleDialog="toggleDialog" />
    <EmptyDictionaryState
      @toggleDialog="toggleDialog"
      v-if="dictionary.length === 0"
    />
    <div v-else>
      <div class="table-header">
        <div class="table-header-controls">
          <div class="md-headline">My dictionary ({{ dictionary.length }})</div>
          <div v-if="!$isMobile()">
            <md-button @click="toggleDialog" class="md-raised"
              >Add word</md-button
            >
            <router-link to="/learn">
              <md-button class="md-raised">Learn words</md-button>
            </router-link>
          </div>
        </div>
        <div class="table-header-filter">
          <md-field md-clearable>
            <label>Search</label>
            <md-input v-model="searchWord" md-clearable></md-input>
          </md-field>
        </div>
      </div>
      <md-table>
        <md-table-row>
          <md-table-head class="checkbox-column">
            <md-checkbox v-model="choosedWords" value="all" />
          </md-table-head>
          <md-table-head>Word</md-table-head>
          <md-table-head>Actions</md-table-head>
        </md-table-row>
        <md-table-row v-for="entry in dictionary" v-bind:key="entry.entryId">
          <md-table-cell class="checkbox-column"
            ><md-checkbox v-model="choosedWords" value="entry"
          /></md-table-cell>
          <md-table-cell>
            <div style="display: flex; flex-direction: column;">
              <div class="md-body-2">{{ entry.wordPair.word }}</div>
              <div class="md-caption">{{ entry.wordPair.translation }}</div>
            </div>
          </md-table-cell>
          <md-table-cell
            ><md-button class="md-icon-button"
              ><md-icon>delete</md-icon></md-button
            ></md-table-cell
          >
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
  components: { EmptyDictionaryState, AddWordDialog, SpeedDial },
  computed: {
    dictionary() {
      return this.$store.getters.dictionary;
    }
  }
};
</script>
<style scope lang="scss">
.table-header {
  padding: 10px;
}
.table-header-controls {
  display: flex;
  justify-content: space-between;
}
.table-header-filter {
  display: flex;
  justify-content: space-around;
}
.md-checkbox {
  margin-top: 8px;
}
.md-body-2 {
  font-size: 1.5em;
}
.checkbox-column {
  max-width: 65px;
  // padding-left: 10px;
}
.word-column {
}
.actions-column {
}
</style>
