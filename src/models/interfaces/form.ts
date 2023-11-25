import { UseFormRegister } from "react-hook-form";

export interface IForm {
   
  }
  export interface IInputs {
    label: string;
    name: never | string; 
    register: UseFormRegister<IForm>;
    type: string;
  }