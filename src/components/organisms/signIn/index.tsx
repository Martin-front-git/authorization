import { Box, FormControl } from "@chakra-ui/react";
import { Title } from "../../atoms/text";
import style from "./signIn.module.scss";
import { useForm } from "react-hook-form";
import { Inputs } from "../../atoms/input";
import { IForm } from "../../../models/interfaces/form";
import { Submit } from "../../atoms/button/submit";
import inputs from "../../../i18n/locales/signIn/inp_eng.json";
import { signInAxios } from "../../../services/axios/signIn";
//import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  
  const { register, handleSubmit, reset } = useForm<IForm>({
    mode: "onBlur",
  });
  //const navigate = useNavigate();

  const onSubmit = async (data: IForm) => {
    try {
      reset();

      const response = await signInAxios({
        email: data.email,
        password: data.password,
      });

      //if (response) {
      //navigate("/user");

      //}

      return response;
    } catch (error) {
      console.error("Токен отсутствует или произошла ошибка входа", error);
    }
  };

  return (
    <Box className={style.authorizationBox}>
      <Title text={"Sign In"} />
      <FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((inp) => (
            <Box key={inp.name}>
              <Inputs
                register={register}
                label={inp.label}
                name={inp.name}
                type={inp.type}
              />
            </Box>
          ))}
          <Submit text={"Sign In"} />
        </form>
      </FormControl>
    </Box>
  );
};