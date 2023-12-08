import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask, TasksState } from '../../models/interfaces/tasks';

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
  page: 1,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
      state.loading = false;
      state.error = null;
    },
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
});

export const { setLoading, setError, setPage, setTasks, deleteTask, addTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../store';
// import { ITask, TasksState } from '../../models/interfaces/tasks';

// const initialState: TasksState = {
//   tasks: [],
//   loading: false,
//   error: null,
//   page: 1, 
// };

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     setPage: (state, action: PayloadAction<number>) => {
//       state.page = action.payload;
//     },
//     setTasks: (state, action: PayloadAction<ITask[]>) => {
//       state.tasks = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     addTask: (state, action: PayloadAction<ITask>) => {
//       state.tasks.push(action.payload);
//     },
//     deleteTask: (state, action: PayloadAction<number>) => {
//       state.tasks = state.tasks.filter(task => task.id !== action.payload);
//     },
//     updateTask: (state, action: PayloadAction<ITask>) => {
//       const index = state.tasks.findIndex(task => task.id === action.payload.id);
//       if (index !== -1) {
//         state.tasks[index] = action.payload;
//       }
//     },
//   }
// });

// export const { setPage, setTasks, deleteTask, addTask, updateTask } = tasksSlice.actions;

// export const selectTasks = (state: RootState) => state.tasks.tasks;
// export const selectPage = (state: RootState) => state.tasks.page;

// export default tasksSlice.reducer;
