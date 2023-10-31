import { getMessages, deleteMessage, searchMessage } from "@/api/messageApi";

export default {
  async fetchMessages({ commit }) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await getMessages();
    const messages = response.data.data.data;
    const totalMessages = response.data.totalRecords;
    commit("SET_MESSAGES", messages);
    commit("SET_MESSAGES_RECORDS", totalMessages);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },
  async deleteMessage(context, payload) {
    context.commit("SHOW_PROGRESSBAR", true, { root: true });
    await deleteMessage(payload);
    context.dispatch("fetchMessages");
    context.commit("HIDE_PROGRESSBAR", false, { root: true });
    context.commit(
      "SHOW_SNACKBAR",
      {
        text: "Message deleted!",
        color: "success",
      },
      { root: true }
    );
  },
  async searchMessage({ commit }, payload) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await searchMessage(payload);
    const messages = response.data.data.contacts;
    console.log(messages);
    const totalMessages = response.data.totalRecords;
    commit("SET_MESSAGES", messages);
    commit("SET_MESSAGES_RECORDS", totalMessages);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },
};
