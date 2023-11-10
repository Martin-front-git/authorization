import { Box } from "@chakra-ui/react";
import { Title } from "../../atoms/text";
import style from "./authorization.module.scss";
import { Links } from "../../molecules/links";
import { useForm, SubmitHandler } from "react-hook-form";
import { IInputs } from "../../../models/interfaces/inputs";
import { Inputs } from "../../atoms/input";

interface IForm {
  username: string;
  password: string | number;
}
export const Authorization = () => {
  
  const { register,handleSubmit } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

  //============================
  const username: IInputs = {
    labelText: "Username",
    type: "text",
    placeholder: "Type your username",
  };
  const password: IInputs = {
    labelText: "Password",
    type: "password",
    placeholder: "Type your password",
  };
  const submit: IInputs = {
    labelText: "",
    type: "submit",
    placeholder: "Login",
  };
  return (
    <Box className={style.authorizationBox}>
      <Title />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('username',{ required: true, maxLength: 5,pattern:/^[A-Za-z]+$/i })}/>
        <input type="password" {...register('password',{ required: true, maxLength: 5})}/>
        <Inputs {...username} />
        <Inputs {...password} />
        <Inputs {...submit}/>
      </form>
      <Links />
    </Box>
  );
};
