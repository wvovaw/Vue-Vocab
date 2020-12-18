<template>
  <div class="learning-block">
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
  display: flex;
  justify-content: center;
  // padding: 30px;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
</style>
