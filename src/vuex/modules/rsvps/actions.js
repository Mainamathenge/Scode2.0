import { getRsvps, searchrsvp } from "@/api/rsvpApi";

export default {
  async fetchRsvps({ commit }, pageNumber) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await getRsvps(pageNumber);
    const rsvps = response.data.data.rsvps;
    const totalRsvps = response.data.data.totalRecords;
    commit("SET_RSVP_OBJ", response.data.data);
    commit("SET_RSVPS", rsvps);
    commit("SET_RSVPS_RECORDS", totalRsvps);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },
  async searchRsvp({ commit }, payload) {
    commit("SHOW_PROGRESSBAR", true, { root: true });
    const response = await searchrsvp(payload);
    const rsvps = response.data.data.rsvp;
    console.log("searchRsvp", response.data);
    const totalrsvps = response.data.totalRecords;
    commit("SET_RSVPS", rsvps);
    commit("SET_RSVPS_RECORDS", totalrsvps);
    commit("HIDE_PROGRESSBAR", false, { root: true });
  },
};
