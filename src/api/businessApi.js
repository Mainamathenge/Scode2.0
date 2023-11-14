import axios from "@/api/config";

export function getUser(id) {
  return axios.get(`/api/v1/users/${id}`);
}

export function getUsers() {
  return axios.get(`/api/v1/dashboards/user/business`);
}

export function searchBusiness(payload) {
  return axios.get(
    `/api/v1/searches/search/business?page=${payload.pageNumber}&term=${payload.query}`
  );
}

export function filterBusiness(payload) {
  return axios.get(
    `/api/v1/searches/filter/business?page=${payload.pageNumber}&value=${payload.query}&field=${payload.value}`
  );
}

export function createCustomer(data) {
  return axios.post(`/api/v1/customers`, data);
}

export function activateBusiness(id) {
  return axios.patch(`/api/v1/users/${id}`, { active: true });
}

export function deactivateBusiness(id) {
  return axios.patch(`/api/v1/users/${id}`, { active: false });
}
