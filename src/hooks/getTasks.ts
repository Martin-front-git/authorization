import axios from 'axios';
import { IToken } from '../models/interfaces/token';



export const getTasks = async ({ token, page }: { token: IToken, page: number, pageSize : number }) => {

  try {
    const config = {
      headers: { Authorization: "Bearer " + token },
    };

    const take = 100;
    const skip = (page - 1) * take;

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}tasks?take=${take}&skip=${skip}`, config);
    console.log("Информация о пользователях:", response.data.data);

    return response.data;
  } catch (error) {
    console.log("Произошла ошибка:", error);
    throw error;
  }
};
