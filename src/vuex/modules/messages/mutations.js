export default {
  SET_MESSAGES(state, messages, totalMessages) {
    state.messages = messages;
    state.totalMessages = totalMessages;
  },
  SET_MESSAGES_RECORDS(state, totalMessages) {
    state.totalMessages = totalMessages;
  },
  SET_CURRENT_PAGE(state, data) {
    state.messages.currentPage = data;
  },
};
