<template>
  <div class="history-container">
    History
    <HistoryItem 
      description="parkir"
      amount="2000"
       />
    <HistoryItem 
      description="parkir"
      amount="2000"
       />
    <HistoryItem 
      description="parkir"
      amount="2000"
       />
  </div>
</template>

<script>
import HistoryItem from "../components/HistoryItem.vue";
export default {
  components: { HistoryItem },
};
</script>

<style lang="scss" scoped>
.history-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>