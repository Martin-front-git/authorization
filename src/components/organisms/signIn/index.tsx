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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../../store/slices/userSlice";

export const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<IForm>({
    mode: "onBlur",
  });
  const dispatch = useDispatch();
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

      const accessToken = response.data.data.accessToken;
      const refreshToken = response.data.data.refreshToken;
      tokenCookie.set({ accessToken,refreshToken }); 
      console.log("Token was set in the cookie:", accessToken);
      if(accessToken !== ""){
        try {
           dispatch(logIn());
           navigate("/user")
        } catch (error) {
          return error;
        }
      }
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
