import { createSlice } from '@reduxjs/toolkit';

interface IUser {
    isLoggedIn : boolean
}
const initialState: IUser = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
