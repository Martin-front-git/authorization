import axios from 'axios';

interface IToken {
  token: string;
}

export const getTasks = async ({ token, page }: { token: IToken, page: number }) => {
  try {
    const config = {
      headers: { Authorization: "Bearer " + token },
    };

    const take = 9; // количество задач на страницу
    const skip = (page - 1) * take; // количество задач, которые нужно пропустить

    const response = await axios.get(`http://116.203.128.127:5680/api/v1/tasks?take=${take}&skip=${skip}`, config);
    console.log("Информация о пользователях:", response.data.data);

    return response.data;
  } catch (error) {
    console.log("Произошла ошибка:", error);
    throw error;
  }
};
