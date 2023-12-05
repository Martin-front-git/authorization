import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, setTasks } from "../store/slices/tasksSlice";
import { tokenCookie } from "./tokenCookie";
import { getTasks } from "./getTasks";

// Ваш хук useTasks
export const useTasks = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;

  const fetchTasksList = useCallback(async () => {
    const token = tokenCookie.get("token");
    if (!token) return;

    setLoading(true);
    setError(null);

    try {
      const response = await getTasks({ token, page, pageSize });
      dispatch(setTasks(response.data));
    } catch (error) {
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

  return { tasks, loading, error, fetchTasksList, page, handlePageChange };
};

