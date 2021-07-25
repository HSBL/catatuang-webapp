<template>
  <div class="card-container">
    <b-card
      title="Catat Pengeluaran"
      img-src="https://i.postimg.cc/Njb6HN0H/portrait-two-young-stylish-smiling-blond-women-holding-shopping-bags-women-dressed-summer-hipster-cl.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Amount:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.amount"
              type="number"
              placeholder="5.000"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Deskripsi:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.description"
              placeholder="Masukkan Deskripsi"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Kategori:"
            label-for="input-3"
          >
            <b-form-select
              id="input-3"
              v-model="form.category"
              :options="categories"
              required
            ></b-form-select>
          </b-form-group>
<br>
          <b-button type="submit" variant="primary">Simpan</b-button>
          <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
        </b-form>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        amount: "",
        description: "",
        category: null,
        checked: [],
      },
      categories: [
        { text: "Select One", value: null },
        "Makan",
        "Bulanan",
        "Grocery",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.amount = "";
      this.form.description = "";
      this.form.category = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
.card-container {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
}
</style>