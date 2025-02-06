import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SigninStart: (state) => {
      state.loading = true;
    },
    Signinsuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    SigninFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    UpdateUserStart: (state) => {
      state.loading = true;
    },
    UpdateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    UpdateUserFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    DeleteUserStart: (state) => {
      state.loading = true;
    },
    DeleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    DeleteUserFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    ClearError: (state) => {
      state.error = null;
    },
  },
});
export const {
  SigninStart,
  Signinsuccess,
  SigninFailed,
  UpdateUserStart,
  UpdateUserSuccess,
  UpdateUserFailed,
  DeleteUserStart,
  DeleteUserSuccess,
  DeleteUserFailed,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailed,
  ClearError,
} = UserSlice.actions;
export default UserSlice.reducer;
