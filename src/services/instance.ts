import axios from "axios";
import { tokenCookie } from "../hooks/tokenCookie";
import refreshAccessToken from "../hooks/refreshToken";

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
    if (error.code === "ERR_BAD_REQUEST") {
      
    } else if (error.response.status === 401){
      console.log("err_invalid_access_token");
      await refreshAccessToken();
      const newAccessToken = tokenCookie.get("accessToken");
      error.config.headers.Authorization = `Bearer ${newAccessToken}`;
      return axios(error.config);
    }
    return Promise.reject(error);
  }
);

export default instance;
