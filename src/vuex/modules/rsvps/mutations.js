export default {
  SET_RSVP_OBJ(state, payload) {
    state.rsvpObj = payload;
  },
  SET_RSVPS(state, rsvps, totalRsvps) {
    state.rsvps = rsvps;
    state.totalRsvps = totalRsvps;
  },
  SET_RSVPS_RECORDS(state, totalRsvps) {
    state.totalRsvps = totalRsvps;
  },
  SET_CURRENT_PAGE(state, data) {
    state.rsvps.currentPage = data;
  },
};
