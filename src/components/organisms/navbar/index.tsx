import { Box } from "@chakra-ui/react";
import { Links } from "../../atoms/link";
import { useSelector } from "react-redux";
import { tokenCookie } from "../../../hooks/tokenCookie";
import { Buton } from "../../atoms/button/button";

export const Navbar = () => {
  const signIn = {
    name: "signIn",
    link: "/signIn",
  };
  const signUp = {
    name: "signUp",
    link: "/signUp",
  };
  const user = {
    name: "user",
    link: "/user",
  };
  const newTask = {
    name: "newTask",
    link: "/newTask",
  };
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);

  const logOut = () => {
    tokenCookie.remove();
  };
  return (
    <Box w="100%" h={50} bg="red">
      <Box display="flex" justifyContent="center" gap={10}>
        {isLoggedIn ? (
          <>
            <Links {...newTask} />
            <Links {...user} />
            <Buton onClick={logOut} text={'logOut'}/>
          </>
        ) : (
          <>
            <Links {...signIn} />
            <Links {...signUp} />
          </>
        )}
      </Box>
    </Box>
  );
};
