import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axios/instance";
import { ITask } from "../../models/interfaces/tasks";

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async ({ skip }: { skip: number }) => {
    try {
      const res = await instance.get(
        `${import.meta.env.VITE_BASE_URL}tasks?skip=${skip}&take=10`
      );
      console.log(res);
      
      const data = await res.data.data;
      

      const totalCount = res.data._meta.total;
      
      return { data, totalCount };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const addTasks = createAsyncThunk("tasks/addTask", async (task: any) => {
  const res = await instance.post("tasks", task);

  return res.data.data;
});

export const editTasks = createAsyncThunk(
  "tasks/editTasks",
  async (task: ITask) => {
    const res = await instance.patch(`tasks/${task.id}`, {
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      status: task.status,
    });

    return res.data;
  }
);

export const deleteTasks = createAsyncThunk(
  "tasks/deleteTasks",
  async (id: string) => {
    try {
      await instance.delete(`tasks/${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);
