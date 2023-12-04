import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, setTasks } from "../store/slices/tasksSlice";
import { tokenCookie } from "./tokenCookie";
import { getTasks } from "../services/axios/getTasks";

export const useTasks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const fetchTasksList = useCallback(async () => {
    const token = tokenCookie.get("token");
    if (!token) return;

    setLoading(true);
    setError(null);

    try {
      const response = await getTasks({ token });
      dispatch(setTasks(response.data));
    } catch (error) {
      setError("Произошла ошибка при загрузке задач.");
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchTasksList();
  }, [fetchTasksList]);

  return { tasks, loading, error, fetchTasksList };
};
