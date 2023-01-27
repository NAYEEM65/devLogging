import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authApi";
interface IinitialState {
  token: string | undefined;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: IinitialState = {
  token: localStorage.getItem("token") || undefined,
  isAuthenticated: false,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      register(
        action.payload.fullName,
        action.payload.email,
        action.payload.password
      )
        .then((res: any) => {
          localStorage.setItem("token", res.data.token);
          // state.token = res.data.token;
        })
        .then(() => {
          state.isAuthenticated = true;
        });

      state.loading = false;
    },
    logOutUser: (state) => {
      state.token = undefined;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const { registerUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
