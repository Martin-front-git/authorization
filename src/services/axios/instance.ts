import axios from "axios";
import { tokenCookie } from "../../hooks/tokenCookie";
import {refreshAccessToken} from "../../hooks/refreshToken";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json","accept": "application/json"},
});

instance.interceptors.request.use(function (config) {
  const accessToken = tokenCookie.get("accessToken");
  
  config.headers.Authorization = `Bearer ${accessToken}`;
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";
  
  return config;
});

instance.interceptors.response.use(
  function (response) {
    
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      
      originalRequest._retry = true;
        await refreshAccessToken();
      const accessToken = tokenCookie.get("accessToken");
      if (accessToken) {
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return instance(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
