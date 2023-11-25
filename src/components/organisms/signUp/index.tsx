import { Box, Button, FormControl } from "@chakra-ui/react";
import { Title } from "../../atoms/text";
import style from "./signUp.module.scss";
import { Link } from "../../molecules/links";
import { useForm } from "react-hook-form";
import { Inputs } from "../../atoms/input";
import { IForm } from "../../../models/interfaces/form";
import { Submit } from "../../atoms/button/submit";
import inp_eng from "../../../i18n/locales/signUp/inp_eng.json";
import inp_ru from "../../../i18n/locales/signUp/inp_ru.json";
import { useState } from "react";

export const SignUp = () => {
  const [isEng, setIsEng] = useState(false);
  const toggleState = () => {
    setIsEng(!isEng);
  };
  const { register, handleSubmit, reset } = useForm<IForm>({
    mode: "onBlur",
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
    reset();
  };
  const languages = [
    { code: "eng", inputs: inp_eng },
    { code: "ru", inputs: inp_ru },
  ];
  return (
    <Box className={style.authorizationBox}>
      <Title text={isEng ? "Registration" : "Регистрация"}/>
      <Button
        className={style.lang_btn}
        bgGradient="linear(to-r, cyan.400, pink.600)"
        onClick={toggleState}
      >
        {isEng ? "Ru" : "Eng"}
      </Button>
      <FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          {languages
            .find((lang) => lang.code === (isEng ? "eng" : "ru"))
            ?.inputs.map((inp) => (
              <>
              <Box key={inp.name}>
                <Inputs
                  register={register}
                  label={inp.label}
                  name={inp.name}
                  type={inp.type}
                />
              </Box>
              </>
            ))}
            <Submit text={isEng ? "Registration" : "Регистрация"} />
          
        </form>
      </FormControl>
      <Link />
    </Box>
  );
};
