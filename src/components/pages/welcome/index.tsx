import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import style from "./welcome.module.scss";
import { Buton } from "../../atoms/button/button";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Box className={style.welcomeBlock}>
      <Text fontSize={30}>Welcome</Text>
      <Box className={style.buttonBlock}>
        <Buton
          onClick={() => navigate("/signIn")}
          text={"signIn"}
          width={"80%"}
        />
        <Buton
          onClick={() => navigate("/signUp")}
          text={"signUp"}
          width={"80%"}
        />
      </Box>
    </Box>
  );
};
