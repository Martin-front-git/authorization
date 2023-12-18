import { NavLink, useNavigate } from "react-router-dom";
import { tokenCookie } from "../../../hooks/tokenCookie";
import style from "./navbar.module.scss";
import { ThemeToggle } from "../../atoms/themes/themeToggle";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { getUser } from "../../../store/slices/authFetchContent";

export const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state:any) => state.authorization.contents);
  
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

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
      <Menu>
        <MenuButton as={Button}>
          {user.firstName}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => {navigate("/user");}}>User Page</MenuItem>
          <MenuItem onClick={() => {tokenCookie.remove(); navigate("/*");}}>Log Out</MenuItem>
        </MenuList>
      </Menu>
      </Box>
    </Box>
  );
};
