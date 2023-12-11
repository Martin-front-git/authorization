import { Routes } from "react-router-dom";
import AuthRoutes from "../../../routes/authRoutes";
import UnAuthRoutes from "../../../routes/unAuthRoutes";
import { Navbar } from "../../organisms/navbar";

export const RegisterSite = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        {AuthRoutes}
        {UnAuthRoutes}
      </Routes>
    </>
  );
};
