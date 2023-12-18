import React, { useEffect } from "react";
import { IGuard } from "../models/interfaces/guard";
import { Route, Routes } from "react-router-dom";
import UserPage from "../components/pages/tasks";
import NewTask from "../components/pages/newTask";
import { EditTask } from "../components/pages/edit";
import { Navbar } from "../components/organisms/navbar";
import { Footer } from "../components/pages/footer";

const AuthGuard: React.FC<IGuard> = ({ component }) => {
  useEffect(() => {}, [component]);

  return (
    <>
      <Navbar />
      {component}
      <Routes>
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/edit" element={<EditTask />} />
        <Route path="/newTask" element={<NewTask />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default AuthGuard;
