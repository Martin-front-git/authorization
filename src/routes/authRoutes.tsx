import { Route } from "react-router-dom";
import AuthGuard from "../guards/authGuards";
import UserPage from "../components/pages/user";
import NewTask from "../components/pages/newTask";
import { EditTask } from "../components/pages/edit";

const AuthRoutes = [
  <Route
    key="tasks"
    path="/tasks/*"
    element={<AuthGuard component={<UserPage />} />}
  />,
  <Route
    key="edit"
    path="/tasks/:taskId/update/*"
    element={<AuthGuard component={<EditTask />} />}
  />,
  <Route
    key="create"
    path="/tasks/create/*"
    element={<AuthGuard component={<NewTask />} />}
  />,
];


export default AuthRoutes;
