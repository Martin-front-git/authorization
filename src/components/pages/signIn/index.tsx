import { Box, FormControl, Alert } from "@chakra-ui/react";
import { Title } from "../../atoms/text";
import style from "./signIn.module.scss";
import { useForm } from "react-hook-form";
import { Inputs } from "../../atoms/input";
import { IAuthorization } from "../../../models/interfaces/form";
import { Submit } from "../../atoms/button/submit";
import inputs from "../../../i18n/locales/signIn/inp_eng.json";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../store/slices/authFetchContent";
import { AppDispatch } from "../../../store/store";
import { tokenCookie } from "../../../hooks/tokenCookie";

export const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<IAuthorization>({
    mode: "onBlur",
  });

  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: any) => state.authorization);

  const onSubmit = async (data: IAuthorization) => {
    try {
      reset();
      const action = await dispatch(signIn(data));
      if (signIn.fulfilled.match(action)) {
        tokenCookie.set({
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        });
        navigate("/user");
      }
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
      {auth.isLoading && <div>Loading...</div>}
      {auth.error && <Alert status="error">{auth.error}</Alert>}
    </Box>
  );
};
