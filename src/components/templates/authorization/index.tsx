import { Routes } from "react-router-dom";
import AuthRoutes from "../../../routes/authRoutes";
import UnAuthRoutes from "../../../routes/unAuthRoutes";

export const Authorization = () => {
  return (
    <>
      <Routes>
        {AuthRoutes}
        {UnAuthRoutes}
      </Routes>
    </>
  );
};
