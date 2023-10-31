import Vue from "vue";
import Vuex from "vuex";

import userModule from "./modules/users/index.js";
import businessModule from "./modules/businesses/index.js";
import activityModule from "./modules/activities/index.js";
import communityModule from "./modules/communities/index.js";
import messageModule from "./modules/messages/index.js";
import rsvpModule from "./modules/rsvps/index.js";
import statModule from "./modules/stats/index.js";
import searchModule from "./modules/searches/index.js";

import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: userModule,
    businesses: businessModule,
    activities: activityModule,
    communities: communityModule,
    messages: messageModule,
    rsvps: rsvpModule,
    stats: statModule,
    searches: searchModule,
  },
  state: {
    user: null,
    todos: null,
    snackbar: {
      show: false,
      text: "",
      color: "",
    },
    progressbar: {
      show: false,
      color: "#01244A",
    },
    loading: {
      registerBtn: {
        disabled: false,
        load: false,
      },
      loginBtn: {
        disabled: false,
        load: false,
      },
      forgotBtn: {
        disabled: false,
        load: false,
        proceed: false,
      },
      resetBtn: {
        disabled: false,
        load: false,
      },
    },
  },
  getters,
  mutations,
  actions,
});
