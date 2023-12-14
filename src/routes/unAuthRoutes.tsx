import { Route } from "react-router-dom";
import { SignIn } from "../components/pages/signIn";
import { SignUp } from "../components/pages/signUp";
import UnAuthGuard from "../guards/unAuthGuards";
import { Welcome } from "../components/pages/welcome";

const UnAuthRoutes = [
  <Route
    key="welcome"
    path="/*"
    element={<UnAuthGuard component={<Welcome />} />}
  ></Route>,
  <Route
    key="signUp"
    path="/signUp/*"
    element={<UnAuthGuard component={<SignUp />} />}
  >
    {" "}
  </Route>,
  <Route
    key="signIn"
    path="/signIn/*"
    element={<UnAuthGuard component={<SignIn />} />}
  ></Route>,
];

export default UnAuthRoutes;
