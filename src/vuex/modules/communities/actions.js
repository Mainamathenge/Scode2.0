import { getCommunities, searchCommunity } from "@/api/communityApi";

export default {
  async fetchCommunities({ commit }) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await getCommunities();
    const communities = response.data.data.data;
    const totalCommunities = response.data.totalRecords;
    commit("SET_COMMUNITIES", communities);
    commit("SET_COMMUNITIES_RECORDS", totalCommunities);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },
  async searchCommunity({ commit }, payload) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await searchCommunity(payload);
    const communities = response.data.data.community;
    console.log(communities);
    const totalcommunities = response.data.totalRecords;
    commit("SET_COMMUNITIES", communities);
    commit("SET_COMMUNITIES_RECORDS", totalcommunities);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },
};
