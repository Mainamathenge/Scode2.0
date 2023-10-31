import {
  getStats,
  getUserLineGraphs,
  getLastRecords,
  getLastActivities,
} from "@/api/statApi";

export default {
  async getStats({ commit }) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await getStats();
    const totalStats = response.data.data;
    commit("SET_STATS", totalStats);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },
  async getUserGraphs({ commit }) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await getUserLineGraphs();
    const userGraphs = response.data.data;
    console.log("userGraphs", userGraphs);
    commit("SET_USER_GRAPHS", userGraphs);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },

  async getLastBusinessRecords({ commit }) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await getLastRecords(`business`);
    const businesses = response.data.data;
    commit("SET_BUSINESS", businesses);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },

  async getLastExplorerRecords({ commit }) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await getLastRecords(`explorer`);
    const explorers = response.data.data;
    commit("SET_EXPLORER", explorers);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },

  async getLastActivityRecords({ commit }) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await getLastActivities();
    const activities = response.data.data;
    commit("SET_ACTIVITY_LATEST", activities);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },
};
