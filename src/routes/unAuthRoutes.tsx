import { Route } from "react-router-dom";
import { SignIn } from "../components/organisms/signIn";
import { SignUp } from "../components/organisms/signUp";
import UnAuthGuard from "../guards/unAuthGuards";

const UnAuthRoutes = [
    <Route key="signIn" path="/signIn" element={<UnAuthGuard component={<SignIn />} />} ></Route>,
    <Route key="signUp" path="/signUp" element={<UnAuthGuard component={<SignUp />} />} > </Route>
]

export default UnAuthRoutes;