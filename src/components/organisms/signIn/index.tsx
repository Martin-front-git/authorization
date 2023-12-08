import axios from "axios"; // <-- Import axios here
import { Box, FormControl } from "@chakra-ui/react";
import { Title } from "../../atoms/text";
import style from "./signIn.module.scss";
import { useForm } from "react-hook-form";
import { Inputs } from "../../atoms/input";
import { IForm } from "../../../models/interfaces/form";
import { Submit } from "../../atoms/button/submit";
import inputs from "../../../i18n/locales/signIn/inp_eng.json";
import { tokenCookie } from "../../../hooks/tokenCookie";

export const SignIn = () => {
  const { register, handleSubmit, reset } = useForm<IForm>({
    mode: "onBlur",
  });

  const onSubmit = async (data: IForm) => {
    try {
      reset();

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}auth/login`,
        {
          email: data.email,
          password: data.password,
        }
      );

      const token = response.data.data.accessToken;
      tokenCookie.set({ token: token, page: 1, pageSize: null });

      console.log("Token was set in the cookie:", token);
      return response;
    } catch (error) {
      console.error("Error during sign in:", error);
      throw error;
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
