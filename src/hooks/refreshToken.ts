import { tokenCookie } from "./tokenCookie";
import instance from "../services/axios/instance";

export const refreshAccessToken = async () => {
  try {
    const refreshToken = tokenCookie.get("refreshToken");
    console.log(refreshToken);
    
    if (refreshToken) {
      
      const response = await instance.post("auth/refresh-token", {
        refreshToken,
      });
      console.log(response);

      if (response.status === 201) {
        const newAccessToken = response.data.data.accessToken;
        const newRefreshToken = response.data.data.refreshToken;

        tokenCookie.set({
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });
      }
    } else {
      console.error("Ошибка: refreshToken отсутствует в куки");
    }
  } catch (error) {
    console.log("Ошибка при обновлении access token:", error);
    document.cookie =
      "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Secure; SameSite=None";
  }
};
