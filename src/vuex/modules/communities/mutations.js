export default {
  SET_COMMUNITIES(state, communities, totalCommunities) {
    state.communities = communities;
    state.totalCommunities = totalCommunities;
  },
  SET_COMMUNITIES_RECORDS(state, totalCommunities) {
    state.totalCommunities = totalCommunities;
  },
  SET_CURRENT_PAGE(state, data) {
    state.communities.currentPage = data;
  },
};
