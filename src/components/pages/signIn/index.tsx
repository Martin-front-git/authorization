import { Box, FormControl, Alert, Flex, Text } from "@chakra-ui/react";
import { Title } from "../../atoms/text";
import style from "./signIn.module.scss";
import { useForm } from "react-hook-form";
import { Inputs } from "../../atoms/input";
import { IAuthorization } from "../../../models/interfaces/form";
import { Submit } from "../../atoms/button/submit";
import inputs from "../../../i18n/locales/signIn/inp_eng.json";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { Buton } from "../../atoms/button/button";
import { SignInDispatch } from "./signInDispatch";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: any) => state.authorization);
  const { register, handleSubmit, reset } = useForm<IAuthorization>({
    mode: "onBlur",
  });

  return (
    <Box className={style.authorizationBox}>
      <Title text={"Sign In"} />
      <FormControl>
        <form
          onSubmit={handleSubmit((data) =>
            SignInDispatch({ data, reset, dispatch, navigate })
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
          <Box className="submit">
            <Submit width={"80%"} text={"Sign In"} />
          </Box>
        </form>
      </FormControl>
      <Flex
        justifyContent="space-around"
        m="10% auto"
        alignItems="center"
        gap={5}
        w="80%"
      >
        <Text fontSize={14}>to register click here</Text>
        <Buton
          onClick={() => navigate("/signUp")}
          text="sign up"
          width={"25%"}
        />
      </Flex>
      {auth.isLoading && <div>Loading...</div>}
      {auth.error && <Alert status="error">{auth.error}</Alert>}
    </Box>
  );
};
