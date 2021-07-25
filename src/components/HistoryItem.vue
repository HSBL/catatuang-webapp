<template>
  <b-card
    title="Pengeluaran"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{description}}
    </b-card-text>

    <b-button href="#" variant="primary">Rp {{amount}},-</b-button>
  </b-card>
</template>

<script>
export default {
name: 'HistoryItem',
  props: {
    description: String,
    amount: Number,
    created: Date,
  }
}
</script>

<style>

</style>