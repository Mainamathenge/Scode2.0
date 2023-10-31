import axios from "@/api/config";

export function getRsvps(pageNumber) {
  return axios.get(`/api/v1/dashboards/rsvps?page=${pageNumber}`);
}

export function searchrsvp(payload) {
  return axios.get(
    `/api/v1/searches/search/rsvp?page=${payload.pageNumber}&term=${payload.query}`
  );
}
