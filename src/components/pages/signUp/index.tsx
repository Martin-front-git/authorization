import { Box, FormControl, Alert } from "@chakra-ui/react";
import { Title } from "../../atoms/text";
import style from "./signUp.module.scss";
import { useForm } from "react-hook-form";
import { Inputs } from "../../atoms/input";
import { IAuthorization} from "../../../models/interfaces/form";
import { Submit } from "../../atoms/button/submit";
import inputs from "../../../i18n/locales/signUp/inp_eng.json";
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from "../../../store/slices/authFetchContent";
import { AppDispatch } from "../../../store/store";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { register, handleSubmit, reset } = useForm<IAuthorization>({
    mode: "onBlur",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state:any) => state.authorization);

  const onSubmit = async (data: IAuthorization) => {
    try {
      reset();
      dispatch(signUp(data));
      navigate("/signIn");
    } catch (error) {
      console.error("Error during sign up:", error);
      throw error;
    }
  };

  return (
    <Box className={style.authorizationBox}>
      <Title text={"Registration"} />
      <FormControl>
        {auth.isLoading && <div>Loading...</div>} 
        {auth.error && <Alert status="error">{auth.error}</Alert>}
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
          <Submit text={"Registration"} />
        </form>
      </FormControl>
    </Box>
  );
};
