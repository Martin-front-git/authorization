import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import authorizationReducer from './slices/authorizationSlice';
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    authorization : authorizationReducer
  },
});
export type AppDispatch = typeof store.dispatch