export default {
  SET_ACTIVITIES_OBJ(state, payload) {
    state.activitiesObj = payload;
  },
  SET_ACTIVITIES(state, activities, totalActivities) {
    state.activities = activities;
    state.totalActivities = totalActivities;
  },
  SET_ACTIVITIES_RECORDS(state, totalActivities) {
    state.totalActivities = totalActivities;
  },
  SET_CURRENT_PAGE(state, data) {
    state.activities.currentPage = data;
  },
};
