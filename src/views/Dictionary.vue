<template>
  <div class="dictionary-page">
    <EmptyDictionaryState v-if="!dictionary"></EmptyDictionaryState>
  </div>
</template>

<script>
import EmptyDictionaryState from "../components/EmptyDictionaryState";

export default {
  name: "Dictionary",
  components: { EmptyDictionaryState },
  computed: {
    dictionary() {
      return this.$store.getters.dictionary;
    }
  }
};
</script>
