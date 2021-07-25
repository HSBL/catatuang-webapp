<template>
  <b-card
    :title="description"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{created}}
    </b-card-text>

    <b-button href="#" variant="primary">Rp {{Number(amount).toLocaleString("id-ID")}},-</b-button>
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