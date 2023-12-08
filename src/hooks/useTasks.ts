
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {  setTasks } from "../store/slices/tasksSlice";
import { tokenCookie } from "./tokenCookie";
import { getTasks } from "./getTasks";
import { IToken } from "../models/interfaces/token";

export const useTasks = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  //const tasks = useSelector(selectTasks);
  const [page, setPage] = useState<number>(1);
   const pageSize = 10;
  
  const fetchTasksList = useCallback(async () => {
    const token:IToken | null = tokenCookie.get("token");
    if (!token) return;

    setLoading(true);
    setError(null);
    try {
      const response = await getTasks({ token, page, pageSize });
      dispatch(setTasks(response.data));
    } catch (error) {
      console.log(pageSize);
      
      setError("Произошла ошибка при загрузке задач.");
    } finally {
      setLoading(false);
    }
  }, [dispatch, page, pageSize]);

  useEffect(() => {
    fetchTasksList();
  }, [fetchTasksList]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {  loading, error, fetchTasksList, page, handlePageChange };
};

