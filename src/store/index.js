import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/api.js";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    history: [],
  },
  mutations: {
    START_LOADING(state) {
      state.isLoading = true;
    },
    FINISH_LOADING(state) {
      state.isLoading = false;
    },
    FETCH_HISTORY(state, payload) {
      state.history = payload;
    },
  },
  actions: {
    fetchHistory(context) {
      context.commit("START_LOADING");
      return new Promise(function(resolve, reject) {
        axios({
          method: "GET",
        })
          .then(({ data }) => {
            context.commit("FINISH_LOADING");
            context.commit("FETCH_HISTORY", data);
            router.push("/history");
            resolve(data);
          })
          .catch((err) => {
            context.commit("FINISH_LOADING");
            reject(err.response.data);
          });
      });
    },
  },
  modules: {},
});
