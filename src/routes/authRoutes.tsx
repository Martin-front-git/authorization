import { Route } from "react-router-dom";
import AuthGuard from "../guards/authGuards";
import NewTask from "../components/pages/newTask";
import { EditTask } from "../components/pages/edit";
import TasksPage from "../components/pages/tasks";
import { UserPage } from "../components/pages/user";

const AuthRoutes = [
  <Route
    key="user"
    path="/user/*"
    element={<AuthGuard component={<UserPage />} />}
  />,
  <Route
    key="tasks"
    path="/tasks/*"
    element={<AuthGuard component={<TasksPage />} />}
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
