import { createSlice } from "@reduxjs/toolkit";
import { IAuthInitial } from "../../models/interfaces/initial";
import { signIn, signUp } from "./authFetchContent";

const initialState: IAuthInitial = {
  isLoading: false,
  error: null,
  accessToken : [],
  refreshToken : []
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // signIn //
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // signUp //
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
  },
});

export default authorizationSlice.reducer;
