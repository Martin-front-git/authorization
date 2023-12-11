import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axios/instance";
import { ITask } from "../../models/interfaces/tasks";


export const getTasks = createAsyncThunk("tasks/getTasks", async () => {
  try {
    const res = await instance.get(`${import.meta.env.VITE_BASE_URL}tasks?take=100&skip=0`);
    const data = await res.data.data;
    
    return data;
  } catch (error:any) {
    return error.message;
  }
});

export const addTasks = createAsyncThunk("tasks/addTask", async (task:any) => {
  const res = await instance.post("tasks", task);
  
  return res.data.data;
});

export const editTasks = createAsyncThunk("tasks/editTasks", async (task: ITask) => {
  const res = await instance.patch(`tasks/${task.id}`, {
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    status: task.status,
  });

  return res.data;
});

export const deleteTasks = createAsyncThunk(
  'tasks/deleteTasks',
  async (id:string) => {
    try {
      await instance.delete(`tasks/${id}`)
      return id;
    } catch (error) {
      return error;
    }
  }
);




