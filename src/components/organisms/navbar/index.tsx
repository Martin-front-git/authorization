import { NavLink, useNavigate } from "react-router-dom";
import { Buton } from "../../atoms/button/button";
import { tokenCookie } from "../../../hooks/tokenCookie";
import style from "./navbar.module.scss";
import { ThemeToggle } from "../../atoms/themes/themeToggle";
import { Box } from "@chakra-ui/react";

export const Navbar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    tokenCookie.remove();
    navigate("/*");
  };
  

  return (
    <Box className={style.navbarBlock} > 
    <ThemeToggle/>
      <Box className={style.navlink} boxShadow="dark-lg">
        <NavLink to={"/tasks/create"}>New Task</NavLink>
      </Box>
      <Box className={style.navlink} boxShadow="dark-lg">
        <NavLink to={"/tasks"}>Tasks</NavLink>
      </Box>
      <Box>
        <Buton onClick={logOut} text={"logOut"} />
      </Box>
    </Box>
  );
};
