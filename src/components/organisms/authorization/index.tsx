import { Box } from "@chakra-ui/react";
import { Title } from "../../atoms/texts/title";
import { Inputs } from "../../molecules/inputs";
import { Submit } from "../../atoms/buttons/submit";
import { Usings } from "../../molecules/usings";
import { SignUp } from "../../atoms/links/signUp";
import style from './authorization.module.scss';

export const Authorization = () => {
  return (
    <>
      <Box className={style.authorizationBox} >
        <Title />
        <Inputs />
        <Submit />
        <Usings />
        <SignUp />
      </Box>
    </>
  );
};
