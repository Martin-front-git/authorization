import { ThunkAction } from "redux-thunk";
import { getTasks } from "../../hooks/getTasks";
import { tokenCookie } from "../../hooks/tokenCookie";
import { RootState } from "../store";
import { setError, setLoading, setTasks } from "./tasksSlice";
import { AnyAction } from "@reduxjs/toolkit";
 

export const fetchTasksListAsync = (): ThunkAction<void, RootState, unknown, AnyAction> => 
  async (dispatch, getState) => {

  try {
      dispatch(setLoading(true));
      const token = tokenCookie.get("token");
      const page = getState().tasks.page;
  
      const response = await getTasks({ token, page });
      dispatch(setTasks(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }
  
  export const selectTasks = (state: RootState) => state.tasks.tasks;
  export const selectPage = (state: RootState) => state.tasks.page;
  
  