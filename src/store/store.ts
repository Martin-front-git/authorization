import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { ThunkDispatch } from 'redux-thunk';
import rootReducer from "./rootReducer";


const api = import.meta.env.VITE_BASE_URL;
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api }
      }
    })
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;




// import { configureStore } from '@reduxjs/toolkit';
// import tasksReducer from './slices/tasksSlice';

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//   },
// });
