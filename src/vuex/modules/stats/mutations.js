export default {
  SET_STATS(state, stats) {
    state.stats = stats;
  },
  SET_USER_GRAPHS(state, userGraphs) {
    state.userGraphs = userGraphs;
  },
  SET_BUSINESS(state, lastest) {
    state.latestBusinesses = lastest;
  },
  SET_EXPLORER(state, lastest) {
    state.latestExplorers = lastest;
  },
  SET_ACTIVITY_LATEST(state, lastest) {
    state.latestActivities = lastest;
  },
};
