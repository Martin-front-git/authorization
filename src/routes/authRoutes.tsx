import { Route } from "react-router-dom";
import AuthGuard from "../guards/authGuards";
import UserPage from "../components/pages/user";
import NewTask from "../components/pages/newTask";
import { EditTask } from "../components/pages/edit";

const AuthRoutes = [
  <>
    <Route
      key="user"
      path="/user"
      element={<AuthGuard component={<UserPage />} />}
    />
    <Route
      key="edit"
      path="/user/edit"
      element={<AuthGuard component={<EditTask />} />}
    />
    <Route
      key="newTask"
      path="/newTask"
      element={<AuthGuard component={<NewTask />} />}
    />
  </>,
];

export default AuthRoutes;
