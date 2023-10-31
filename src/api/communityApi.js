import axios from "@/api/config";

export function getCommunities() {
  return axios.get(`/api/v1/communities`);
}

export function searchCommunity(payload) {
  return axios.get(
    `/api/v1/searches/search/communities?page=${payload.pageNumber}&term=${payload.query}`
  );
}
