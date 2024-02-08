import axios from "@/api/config";

export function getMessages() {
  return axios.get(`/api/v1/wallet`);
}

export function deleteMessage(data) {
  return axios.delete(`/api/v1/contacts/${data}`);
}

export function searchMessage(payload) {
  return axios.get(
    `/api/v1/wallet/search?page=${payload.pageNumber}&term=${payload.query}`
  );
}
