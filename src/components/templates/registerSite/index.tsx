import { Box } from "@chakra-ui/react";
import { ThemeToggle } from "../../atoms/themes/themeToggle";
import { Authorization } from "../../organisms/authorization";
import style from './register.module.scss';

export const RegisterSite = () => {
  return (
    <>
      <Box className={style.registerBlock} >
        <ThemeToggle />
      </Box>
      <Authorization />
    </>
  );
};
