import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axios/instance";

export const signIn = createAsyncThunk("authorization/signIn", async (data:any) => {
    const res = await instance.post("auth/login", data);
    
    return res.data.data;
  });

  export const signUp = createAsyncThunk("authorization/signUp", async (data:any) => {
    const res = await instance.post("auth/register", data);
    return res.data.data;
  });
  