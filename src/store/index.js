import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state: {},
  mutations: {
    updateState: (state, { key, value }) => {
      state[key] = value;
    },
  },
  actions: {
    getTableData: async ({ commit }, payload) => {
      const res = await axios.post("http://localhost:3111/getTable", {
        TableName: payload,
      });
      commit("updateState", {
        key: payload,
        value: res,
      });
    },
  },
});

export default store;
