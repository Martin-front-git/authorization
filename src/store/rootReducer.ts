import { combineReducers } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasksSlice";
import authSlice from "./slices/authSlice";

export default combineReducers({
    tasks : tasksSlice,
    auth : authSlice
})