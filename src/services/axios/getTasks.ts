import axios from 'axios';
import { IToken } from '../../models/interfaces/token';

export const getTasks = async ({ token }: IToken) => {
  try {
    const config = {
      headers: { Authorization: "Bearer " + token },
    };

    const response = await axios.get("http://116.203.128.127:5680/api/v1/tasks?take=100&skip=0", config);
    console.log("Информация о пользователях:", response.data.data);

    return response.data;
  } catch (error) {
    console.log("Произошла ошибка:", error);
    throw error;
  }
};