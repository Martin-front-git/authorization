import { Box, FormControl } from "@chakra-ui/react";
import { Title } from "../../atoms/text";
import style from "./authorization.module.scss";
import { Links } from "../../molecules/links";
import { useForm } from "react-hook-form";
import { Inputs } from "../../atoms/input";
import { IForm } from "../../../models/interfaces/form";
import { Submit } from "../../atoms/button";

export const Authorization = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log(data);
  };
  
  const submit = {
    text : "Submit"
  }
  return (
    <Box className={style.authorizationBox}>
      <Title />
      <FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Inputs register={register} label="Username" name="username" />
          <Inputs register={register} label="Password" name="password" />
          <Submit {...submit}/>
        </form>
      </FormControl>
      <Links />
    </Box>
  );
};
