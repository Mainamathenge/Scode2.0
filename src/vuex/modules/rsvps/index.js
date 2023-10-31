import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  namespaced: true,
  state: { rsvps: [], totalRsvps: null, rsvpObj: {} },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
