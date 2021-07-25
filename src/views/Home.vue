<template>
  <div class="home">
    <div class="navigation">
      <button @click="toHistory" class="btn btn-info btn-sm">History</button>
    </div>
    <CreateRecord />
  </div>
</template>

<script>
import CreateRecord from "../components/CreateRecord.vue";

export default {
  name: "Home",
  components: {
    CreateRecord,
  },
  methods: {
    toHistory() {
      this.$router.push("/history");
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  text-align: right;
}
</style>