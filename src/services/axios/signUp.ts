import axios from "axios";
import { IForm } from "../../models/interfaces/form";


export const signUpAxios = async ({firstName,lastName,email,password}:IForm) => {
 try {
    axios
      .post("http://116.203.128.127:5680/api/v1/auth/register", 
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
 } catch (error) {
    console.log(error);
 }
}
