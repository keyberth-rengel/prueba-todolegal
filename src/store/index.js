import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data_user: {},
    token: "",
    alert_error: "",
  },
  mutations: {
    login_user_motations(state, new_data) {
      state.data_user = new_data;
      state.token = new_data.access_token;
    },
    alert_error_login(state, msj) {
      state.alert_error = msj;
    },
  },
  actions: {},
  modules: {},
});
