<template>
  <div class="home">
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
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  text-align: right;
}
</style>