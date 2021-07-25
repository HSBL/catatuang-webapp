<template>
  <div class="history-container">
    <h1>Rekam Jejak Pengeluaran</h1>
    <hr>
    <HistoryItem
      v-for="historyItem in $store.state.history"
      :key="historyItem.id"
      :description="historyItem.description"
      :amount="historyItem.amount"
      :created="historyItem.created"
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
.history-container {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>