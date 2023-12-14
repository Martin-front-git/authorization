import React, { useEffect } from "react";
import { IGuard } from "../models/interfaces/guard";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../components/pages/signIn";
import { SignUp } from "../components/pages/signUp";

const UnAuthGuard: React.FC<IGuard> = ({ component }) => {
  useEffect(() => {}, [component]);

  return (
    <>
      {component}
      <Routes>
        <Route path="/user" element={<SignIn />} />
        <Route path="/user/edit" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default UnAuthGuard;
