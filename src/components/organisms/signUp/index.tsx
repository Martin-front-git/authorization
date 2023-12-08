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
  const { register, handleSubmit, reset } = useForm<IForm>({
    mode: "onBlur",
  });

  const onSubmit = async (data: IForm) => {
    console.log(data);
    reset();
    try {
      axios
        .post(`${import.meta.env.VITE_BASE_URL}auth/register`, 
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        })
        .then(function (response) {
          console.log(response);
        })
   } catch (error) {
      console.log(error);
   }
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
