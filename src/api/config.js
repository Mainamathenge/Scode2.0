import axios from "axios";

//BaseURL
const instance = axios.create({
  baseURL: "https://jellyfish-app-b6jxu.ondigitalocean.app",
});

instance.interceptors.request.use((config) => {
  let token;
  const userString = localStorage.getItem("user");

  if (userString) {
    token = JSON.parse(userString).token;
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
