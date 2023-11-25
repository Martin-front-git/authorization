import { Box, FormControl } from "@chakra-ui/react";
import { Title } from "../../atoms/text";
import style from "./signUp.module.scss";
import { Link } from "../../molecules/links";
import { useForm } from "react-hook-form";
import { Inputs } from "../../atoms/input";
import { IForm } from "../../../models/interfaces/form";
import { Submit } from "../../atoms/button/submit";
import inputs from "../../../helpers/inputs.json";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<IForm>({
    mode: "onBlur",
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
    reset();
  };

  return (
    <Box className={style.authorizationBox}>
      <Title />
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
          <Submit text={'Submit'} />
        </form>
      </FormControl>
      <Link />
    </Box>
  );
};
