import { Routes, useLocation } from "react-router-dom";
import AuthRoutes from "../../../routes/authRoutes";
import UnAuthRoutes from "../../../routes/unAuthRoutes";
import { Navbar } from "../../organisms/navbar";  

export const RegisterSite = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        {AuthRoutes}
        {UnAuthRoutes}
      </Routes>
    </>
  );
};
