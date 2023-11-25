import { Box, Flex } from "@chakra-ui/react";
import { ThemeToggle } from "../../atoms/themes/themeToggle";
import { SignIn } from "../../organisms/signIn";
import style from './register.module.scss';
import { Routes, Route } from "react-router-dom";
import { SignUp } from "../../organisms/signUp";
import { Links } from "../../atoms/link";
export const RegisterSite = () => {
 
  const signIn = {
    name : 'signIn',
    link : '/signIn'
  }
  const signUp = {
    name : 'signUp',
    link : '/signUp'
  }
  return (
    <>
    <Flex justifyContent='center' gap='20px'>
      <Links {...signIn}/>
      <Links {...signUp}/>
    </Flex>
    <Routes>
      <Route path="signIn" element={<SignIn/>}/>
      <Route path="signUp" element={<SignUp/>}/>
    </Routes>
      <Box className={style.registerBlock} >
        <ThemeToggle />
      </Box>
      
    </>
  );
};
