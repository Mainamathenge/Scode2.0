export default {
  SET_BUSINESSES(state, businesses, totalBusinesses) {
    state.businesses = businesses;
    state.totalBusinesses = totalBusinesses;
  },
  SET_USERS_RECORDS(state, totalBusinesses) {
    state.totalBusinesses = totalBusinesses;
  },
  SET_CURRENT_PAGE(state, data) {
    state.businesses.currentPage = data;
  },
};
