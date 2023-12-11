import { createSlice } from "@reduxjs/toolkit";
import { addTasks, deleteTasks, editTasks, getTasks } from "./fetchContent";
import { IInitial } from "../../models/interfaces/initial";

const initialState: IInitial = {
  tasks: [],
  contents: [],
  isLoading: false,
  error: null,
  page: 1,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get tasks //
    builder.addCase(getTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    //add tasks //
    builder.addCase(addTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(addTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // edit tasks //
    builder.addCase(editTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(editTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // delete tasks //
    builder.addCase(deleteTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTasks.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteTasks.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default tasksSlice.reducer;
