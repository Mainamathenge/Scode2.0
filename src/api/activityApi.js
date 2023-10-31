import axios from "@/api/config";

export function getActivity(id) {
  return axios.get(`/api/v1/activities/${id}`);
}

export function searchActivities(payload) {
  return axios.get(
    `/api/v1/searches/search?page=${payload.pageNumber}&term=${payload.query}`
  );
}

export function filterActivities(payload) {
  return axios.get(
    `/api/v1/searches/filter/activity?page=${payload.pageNumber}&value=${payload.query}&field=${payload.value}`
  );
}
// export function filterActivities(payload) {
//   return axios.get(
//     `/api/v1/searches/filter/activity?page=${payload.pageNumber}&value=${payload.query}&field=${payload.value}`
//   );
// }

export function getActivities(pageNumber) {
  return axios.get(`/api/v1/dashboards/activities?page=${pageNumber}`);
}

export function publishActivity(id) {
  return axios.patch(`/api/v1/activities/text/${id}`, { isPublished: true });
}

export function unPublishActivity(id) {
  return axios.patch(`/api/v1/activities/text/${id}`, { isPublished: false });
}
