import {
  getActivities,
  publishActivity,
  searchActivities,
  unPublishActivity,
  filterActivities,
} from "@/api/activityApi";

export default {
  async fetchActivities({ commit }, pageNumber) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await getActivities(pageNumber);
    const activities = response.data.data.activities;
    const totalActivities = response.data.data.totalRecords;
    commit("SET_ACTIVITIES_OBJ", response.data.data);
    commit("SET_ACTIVITIES", activities);
    commit("SET_ACTIVITIES_RECORDS", totalActivities);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },

  async searchActivity({ commit }, payload) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await searchActivities(payload);
    const activities = response.data.data.activities;
    const totalActivities = response.data.data.totalRecords;
    commit("SET_ACTIVITIES_OBJ", response.data.data);
    commit("SET_ACTIVITIES", activities);
    commit("SET_ACTIVITIES_RECORDS", totalActivities);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },

  async filterActivity({ commit }, payload) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await filterActivities(payload);
    const activities = response.data.data.activities;
    const totalActivities = response.data.data.totalRecords;
    commit("SET_ACTIVITIES_OBJ", response.data.data);
    commit("SET_ACTIVITIES", activities);
    commit("SET_ACTIVITIES_RECORDS", totalActivities);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },

  async publishActivity(context, payload) {
    context.commit("SHOW_PROGRESSBAR", true, { root: true });
    await publishActivity(payload);
    const pageNumber = context.state.activities.currentPage;
    context.dispatch("fetchActivities", pageNumber);
    context.commit("HIDE_PROGRESSBAR", false, { root: true });
    context.commit(
      "SHOW_SNACKBAR",
      {
        text: "Activity published!",
        color: "success",
      },
      { root: true }
    );
  },

  async unPublishActivity(context, payload) {
    context.commit("SHOW_PROGRESSBAR", true, { root: true });
    await unPublishActivity(payload);
    const pageNumber = context.state.activities.currentPage;
    context.dispatch("fetchActivities", pageNumber);
    context.commit("HIDE_PROGRESSBAR", false, { root: true });
    context.commit(
      "SHOW_SNACKBAR",
      {
        text: "Activity unpublished!",
        color: "success",
      },
      { root: true }
    );
  },
};
