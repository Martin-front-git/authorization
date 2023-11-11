import { UseFormRegister } from "react-hook-form";

export interface IForm {
    username: string;
    password: string | number;
  }
  export interface InputsProps {
    label: string;
    name: keyof IForm;
    register: UseFormRegister<IForm>;
  }