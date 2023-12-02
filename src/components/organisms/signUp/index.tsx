import { Box, FormControl } from "@chakra-ui/react";
import style from "./signUp.module.scss";
import { useForm } from "react-hook-form";
import { Inputs } from "../../atoms/input";
import { IForm } from "../../../models/interfaces/form";
import { Submit } from "../../atoms/button/submit";
import inputs from "../../../i18n/locales/signUp/inp_eng.json";
import { Title } from "../../atoms/text";
import axios from "axios";

export const SignUp = () => {
  //const BASE_URL = import.meta.env.BASE_URL;
  const { register, handleSubmit, reset } = useForm<IForm>({
    mode: "onBlur",
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
    reset();

    axios
      .post("http://116.203.128.127:5680/api/v1/auth/register", 
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box className={style.authorizationBox}>
      <Title text={"Registration"} />
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
          <Submit text={"Registration"} />
        </form>
      </FormControl>
    </Box>
  );
};
