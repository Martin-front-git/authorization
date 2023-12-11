import axios from "axios";
//import { deleteToken, getToken } from "./../helpers";
import { tokenCookie } from "../hooks/tokenCookie";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(function (config) {
  const accessToken = tokenCookie.get("accessToken");
  config.headers.Authorization = `Bearer ${accessToken}`;
  
  return config;
});

instance.interceptors.response.use(
  function (response) {
    
    return response;
  },
  function (error) {
    if (error.code === "ERR_BAD_REQUEST") {
      //deleteToken();
      //window.location.pathname = "/";
    }
    return Promise.reject(error);
  }
);

export default instance;