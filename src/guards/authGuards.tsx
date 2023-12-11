import React, { useEffect } from "react";
import { IGuard } from "../models/interfaces/guard";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import UserPage from "../components/pages/user";
import NewTask from "../components/pages/newTask";
import { EditTask } from "../components/pages/edit";
import { tokenCookie } from "../hooks/tokenCookie";
import { Buton } from "../components/atoms/button/button";
import { Box } from "@chakra-ui/react";

const AuthGuard: React.FC<IGuard> = ({ component }) => {
  const navigate = useNavigate();
  useEffect(() => {}, [component]);
  const logOut = () => {
    tokenCookie.remove();
    navigate("/*");
  };
  return (
    <>
      <Box w="100%" h={100} bg="red">
        <NavLink to={"/newTask"}>New Task</NavLink>
        <NavLink to={"/user"}>User</NavLink>
        <Buton onClick={logOut} text={"logOut"} />
      </Box>
      {component}
      <Routes>
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/edit" element={<EditTask />} />
        <Route path="/newTask" element={<NewTask />} />
      </Routes>
    </>
  );
};

export default AuthGuard;
