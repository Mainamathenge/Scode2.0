import {
  getUsers,
  activateBusiness,
  deactivateBusiness,
  searchBusiness,
  createCustomer,
  filterBusiness,
} from "@/api/businessApi";

//Change names here
export default {
  async fetchBusinesses({ commit }) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await getUsers();
    const users = response.data.data;
    const totalUsers = response.data.totalRecords;
    commit("SET_BUSINESSES", users);
    commit("SET_USERS_RECORDS", totalUsers);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },
  async searchBusiness({ commit }, payload) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await searchBusiness(payload);
    const business = response.data.data.business;
    console.log(business);
    const totalBusinesses = response.data.totalRecords;
    commit("SET_BUSINESSES", business);
    commit("SET_USERS_RECORDS", totalBusinesses);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },
  async filterBusiness({ commit }, payload) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await filterBusiness(payload);
    const business = response.data.data.business;
    console.log(business);
    const totalBusinesses = response.data.totalRecords;
    commit("SET_BUSINESSES", business);
    commit("SET_USERS_RECORDS", totalBusinesses);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },

  async createCustomer(context, payload) {
    context.commit("SHOW_PROGRESSBAR", true, { root: true });
    console.log(payload);
    await createCustomer(payload);
    context.commit("HIDE_PROGRESSBAR", false, { root: true });
    context.commit(
      "SHOW_SNACKBAR",
      {
        text: "Customer Created!",
        color: "success",
      },
      { root: true }
    );
  },

  async activateBusiness(context, payload) {
    context.commit("SHOW_PROGRESSBAR", true, { root: true });
    await activateBusiness(payload);
    context.dispatch("fetchBusinesses");
    context.commit("HIDE_PROGRESSBAR", false, { root: true });
    context.commit(
      "SHOW_SNACKBAR",
      {
        text: "Business activated!",
        color: "success",
      },
      { root: true }
    );
  },

  async deactivateBusiness(context, payload) {
    context.commit("SHOW_PROGRESSBAR", true, { root: true });
    await deactivateBusiness(payload);
    context.dispatch("fetchBusinesses");
    context.commit("HIDE_PROGRESSBAR", false, { root: true });
    context.commit(
      "SHOW_SNACKBAR",
      {
        text: "Business deactivated!",
        color: "success",
      },
      { root: true }
    );
  },
};
