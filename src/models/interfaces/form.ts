import { UseFormRegister } from "react-hook-form";
import { AppDispatch } from "../../store/store";
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
    placeholder: string;
    name:  any; 
    register: UseFormRegister<IAuthorization>;
    type: string;
  }
  export interface IAuthorization {
    email : string 
   password : string
   data :string
   reset : string
   dispatch : string
   navigate : string
  }
  export interface ISignInDispatchArgs {
    data: IAuthorization;
    reset: () => void;
    dispatch: AppDispatch;
    navigate: (path: string) => void;
  }
  export interface ISignUpDispatchArgs {
    data: IAuthorization;
    reset: () => void;
    dispatch: AppDispatch;
    navigate: (path: string) => void;
  }