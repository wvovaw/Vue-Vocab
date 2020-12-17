<template>
  <div class="learning-block md-scrollbar" style="border: black 1px solid;">
    <WordCard />
  </div>
</template>

<script>
import WordCard from "@/components/WordCard";

export default {
  name: "Learn",
  components: { WordCard }
};
</script>

<style scoped lang="scss">
.learning-block {
  padding: 30px;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
</style>
