import { Route } from "react-router-dom";
import AuthGuard from "../guards/authGuards";
import UserPage from "../components/pages/user";

const AuthRoutes = [
    <Route key="user" path="/user" element={<AuthGuard component={<UserPage />} />} />
]

export default AuthRoutes;