import axios from "@/api/config";

export function getStats() {
  return axios.get(`/api/v1/stats`);
}

export function getUserLineGraphs() {
  return axios.get(`/api/v1/stats/user/graphs`);
}

export function getLastRecords(role) {
  return axios.get(`/api/v1/stats/last/${role}`);
}

export function getLastActivities() {
  return axios.get(`/api/v1/stats/activity/last`);
}
