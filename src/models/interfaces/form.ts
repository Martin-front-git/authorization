import { UseFormRegister } from "react-hook-form";
export interface IData {
  email : string 
  password : string
}
export interface IForm {
   firstName : string
   lastName : string
   email : string 
   password : string
  }
  export interface IInputs {
    label: string;
    name: never | string; 
    register: UseFormRegister<IForm>;
    type: string;
  }