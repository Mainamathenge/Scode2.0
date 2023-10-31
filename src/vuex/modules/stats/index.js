import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  namespaced: true,
  state: {
    stats: {},
    userGraphs: {},
    latestBusinesses: null,
    latestExplorers: null,
    latestActivities: null,
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
