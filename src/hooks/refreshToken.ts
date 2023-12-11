import axios from "axios";
import { tokenCookie } from "./tokenCookie";

const refreshAccessToken = async () => {
  try {
    const accessToken = tokenCookie.get("accessToken");
    const refreshToken = tokenCookie.get("refreshToken");

    if (accessToken && refreshToken) {
      const response = await axios.post("http://116.203.128.127:5680/api/v1", {
        refreshToken,
      });

      if (response.status === 200) {
        const newAccessToken = response.data.accessToken;
        tokenCookie.set(newAccessToken);
      }
    } else {
      console.error("Ошибка: accessToken или refreshToken отсутствует в куки");
    }
  } catch (error) {
    console.error("Ошибка при обновлении access token:", error);
    tokenCookie.remove();
  }
};

export default refreshAccessToken;
