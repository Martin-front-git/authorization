import axios from "axios";
import { IData } from "../../models/interfaces/form";

export const signIn = async ({ email, password }: IData) => {
  
  try {

    const response = await axios.post("http://116.203.128.127:5680/api/v1/auth/login", {
      // email: "admin@gmail.com",
      // password: "Aa$7777777",
      email: email,
      password: password,
    });
    console.log(response);

    const token = response.data.data.accessToken;
    localStorage.setItem("accessToken", token);
    console.log(token);

    return response;
  } catch (error) {
    console.error("Error during sign in:", error);
    throw error;
  }
};
