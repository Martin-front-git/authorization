import { Box } from "@chakra-ui/react";
import { Links } from "../../atoms/link";
import { useSelector } from "react-redux";
import { tokenCookie } from "../../../hooks/tokenCookie";
import { useNavigate } from "react-router-dom";

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
  
  const isLoggedIn = useSelector((state:any) => state.user.isLoggedIn);
  const navigate = useNavigate();
  const logOut = () => {
    tokenCookie.remove();
  };
  return (
    <Box w='100%' h={50} bg='red'>
      <Box display='flex' justifyContent='center' gap={10}>
        {isLoggedIn ? (
          <>
            <Links {...user} />
            <button onClick={logOut}>Log Out</button>
          </>
        ) : ""}
        
        <Links {...signIn} />
        <Links {...signUp} />
      </Box>
    </Box>
  );
};
