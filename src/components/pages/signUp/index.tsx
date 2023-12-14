import { Box, FormControl, Alert, Flex } from "@chakra-ui/react";
import { Title } from "../../atoms/text";
import style from "./signUp.module.scss";
import { useForm } from "react-hook-form";
import { Inputs } from "../../atoms/input";
import { IAuthorization } from "../../../models/interfaces/form";
import { Submit } from "../../atoms/button/submit";
import inputs from "../../../i18n/locales/signUp/inp_eng.json";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { Buton } from "../../atoms/button/button";
import { SignUpDispatch } from "./signUpDispatch";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: any) => state.authorization);
  const { register, handleSubmit, reset } = useForm<IAuthorization>({
    mode: "onBlur",
  });

  return (
    <Box className={style.authorizationBox}>
      <Title text={"Registration"} />
      <FormControl>
        {auth.isLoading && <div>Loading...</div>}
        {auth.error && <Alert status="error">{auth.error}</Alert>}
        <form
          onSubmit={handleSubmit((data) =>
            SignUpDispatch({ data, reset, dispatch, navigate })
          )}
        >
          {inputs.map((inp) => (
            <Box key={inp.name}>
              <Inputs
                register={register}
                placeholder={inp.placeholder}
                name={inp.name}
                type={inp.type}
              />
            </Box>
          ))}
          <Submit text={"Registration"} width={"80%"} />
        </form>
      </FormControl>
      <Flex justifyContent="space-around" mt={10} alignItems="center">
        <p>to login click here</p>
        <Buton
          onClick={() => navigate("/signIn")}
          text="sign in"
          width={"20%"}
        />
      </Flex>
    </Box>
  );
};
