import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axios/instance";
import axios from "axios";
import { tokenCookie } from "../../hooks/tokenCookie";

export const signIn = createAsyncThunk(
  "authorization/signIn",
  async (data: any) => {
    const res = await instance.post("auth/login", data);
    return res.data;
  }
);

export const signUp = createAsyncThunk(
  "authorization/signUp",
  async (data: any) => {
    const res = await instance.post("auth/register", data);
    
    return res.data.data;
  }
);
export const getUser = createAsyncThunk("authorization/getUser", async () => {
  const accessToken = tokenCookie.get("accessToken");
  try {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}users/profile`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
});

export const getFile = createAsyncThunk("authorization/getFile", async (imageName: any) => {
  const accessToken = tokenCookie.get("accessToken");
  try {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}files/${imageName}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching file:", error);
    throw error;
  }
});

export const updateUser = createAsyncThunk("authorization/updateUser", async (formData: any) => {
  const accessToken = tokenCookie.get("accessToken");
  try {
    const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}users/profile`, formData, {
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "multipart/form-data" }
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
});



