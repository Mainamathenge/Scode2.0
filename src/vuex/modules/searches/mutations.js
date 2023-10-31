export default {
  SET_SEARCH_STORE(state, payload) {
    state.searchRef.storeName = payload.storeName;
    state.searchRef.actionName = payload.actionName;
  },
};
