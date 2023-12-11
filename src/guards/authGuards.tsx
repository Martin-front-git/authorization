import React, {  useEffect } from 'react';
import { IGuard } from '../models/interfaces/guard';
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserPage from '../components/pages/user';
import NewTask from '../components/pages/newTask';
import { EditTask } from '../components/pages/edit';

const AuthGuard: React.FC<IGuard> = ({component}) => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state:any) => state.user.isLoggedIn);
    useEffect(() => {
        console.log("Auth Guard");
        if (!isLoggedIn) {
          navigate('/');
        }
      }, [isLoggedIn, navigate]);

    return <>
    {component}
    <Routes>
    <Route
      path="/user"
      element={isLoggedIn ? <UserPage /> : null}
    />
    <Route
      path="/user/edit"
      element={isLoggedIn ? <EditTask /> : null}
    />
    <Route
      path="/newTask"
      element={isLoggedIn ? <NewTask /> : null}
    />
    </Routes>
    </>
}

export default AuthGuard;
