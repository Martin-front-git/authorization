import { Box, FormControl } from "@chakra-ui/react";
import { Title } from "../../atoms/text";
import style from "./signIn.module.scss";
import { Link } from "../../molecules/links";
import { useForm } from "react-hook-form";
import { Inputs } from "../../atoms/input";
import { IForm } from "../../../models/interfaces/form";
import { Submit } from "../../atoms/button/submit";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log(data);
  };
  const submit = {
    text: "Submit",
  };
  return (
    <Box className={style.authorizationBox}>
      <Title />
      <FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Inputs
            register={register}
            label="Username"
            name="username"
          />
          {errors.username && <p>{errors.username.message}</p>}
          <Inputs
            register={register}
            label="Password"
            name="password"
          />
          {errors.password && <p>{errors.password.message}</p>}

          <Submit {...submit} />
        </form>
      </FormControl>
      <Link />
    </Box>
  );
};
