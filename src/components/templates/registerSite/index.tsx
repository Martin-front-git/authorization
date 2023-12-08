import { Flex } from "@chakra-ui/react";
import { Routes } from "react-router-dom";
import { Links } from "../../atoms/link";
import AuthRoutes from "../../../routes/authRoutes";
import UnAuthRoutes from "../../../routes/unAuthRoutes";

export const RegisterSite = () => {
  const signIn = {
    name: "signIn",
    link: "/signIn",
  };
  const signUp = {
    name: "signUp",
    link: "/signUp",
  };
  return (
    <>
      <Flex justifyContent="center" gap="20px">
        <Links {...signIn} />
        <Links {...signUp} />
      </Flex>
      <Routes>
        {AuthRoutes}
        {UnAuthRoutes}
      </Routes>
    </>
  );
};
