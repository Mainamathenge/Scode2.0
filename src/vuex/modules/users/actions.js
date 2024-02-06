import {
  getUsers,
  activateUser,
  deactivateUser,
  updateUser,
  searchUsers,
  filterUsers,
} from "@/api/userApi";

export default {
  async fetchUsers({ commit }) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await getUsers();
    const users = response.data.data.data;
    console.log(users);
    const totalUsers = response.data.totalRecords;
    commit("SET_USERS", users);
    commit("SET_USERS_RECORDS", totalUsers);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },

  async updateUser(context, payload) {
    context.commit("SHOW_PROGRESSBAR", true, { root: true });
    await updateUser(payload);
    context.dispatch("fetchUsers");
    context.commit("HIDE_PROGRESSBAR", false, { root: true });
    context.commit(
      "SHOW_SNACKBAR",
      {
        text: "User details updated!",
        color: "success",
      },
      { root: true }
    );
  },

  async activateUser(context, payload) {
    context.commit("SHOW_PROGRESSBAR", true, { root: true });
    await activateUser(payload);
    context.dispatch("fetchUsers");
    context.commit("HIDE_PROGRESSBAR", false, { root: true });
    context.commit(
      "SHOW_SNACKBAR",
      {
        text: "User activated!",
        color: "success",
      },
      { root: true }
    );
  },

  async deactivateUser(context, payload) {
    context.commit("SHOW_PROGRESSBAR", true, { root: true });
    await deactivateUser(payload);
    context.dispatch("fetchUsers");
    context.commit("HIDE_PROGRESSBAR", false, { root: true });
    context.commit(
      "SHOW_SNACKBAR",
      {
        text: "User deactivated!",
        color: "success",
      },
      { root: true }
    );
  },

  async searchExplorer({ commit }, payload) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await searchUsers(payload);
    const exprolers = response.data.data.customers;
    console.log("exproler-calling", exprolers);
    const totalexprolers = response.data.data.totalRecords;
    commit("SET_USERS", exprolers);
    commit("SET_USERS_RECORDS", totalexprolers);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },

  async filterExplorer({ commit }, payload) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await filterUsers(payload);
    const exprolers = response.data.data.business;
    console.log("exproler-calling", exprolers);
    const totalexprolers = response.data.data.totalRecords;
    commit("SET_USERS", exprolers);
    commit("SET_USERS_RECORDS", totalexprolers);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },
};
