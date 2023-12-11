import { UseFormRegister } from "react-hook-form";
export interface IData {
  email : string 
  password : string
}
export interface IForm {
   firstName? : string
   lastName? : string
   email? : string 
   password? : string
   data? :string
  }
  export interface IInputs {
    label: string;
    name: never | string; 
    register: UseFormRegister<IAuthorization>;
    type: string;
  }
  export interface IAuthorization {
    email : string 
   password : string
  }