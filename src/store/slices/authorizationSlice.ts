import { createSlice } from "@reduxjs/toolkit";
import { IAuthInitial } from "../../models/interfaces/initial";
import { getFile, getUser, signIn, signUp, updateUser } from "./authFetchContent";

const initialState: IAuthInitial = {
  isLoading: false,
  error: null,
  accessToken: [],
  refreshToken: [],
  contents: [],
  files: [],
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // signIn
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // signUp
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // getUser
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload.data;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // updateUser
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload; // обновлено
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // getFile
    builder.addCase(getFile.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getFile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.files = action.payload; // обновлено
    });
    builder.addCase(getFile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default authorizationSlice.reducer;
