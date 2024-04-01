import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser, IUserState } from "@types";
import AuthService from "services/AuthService";

export const login = createAsyncThunk(
  "auth/login",
  async (loginData: IUser) => {
    try {
      const response = await AuthService.login(
        loginData.login,
        loginData.password
      );
      const { accessToken } = response.data;
      localStorage.setItem("token", accessToken);

      return true;
    } catch (error) {
      return false;
    }
  }
);

const initialState: IUserState = {
  isAuth: !!localStorage.getItem("token"),
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    deauth: (state) => {
      state.isAuth = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.isAuth = action.payload;
    }),
      builder.addCase(login.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { deauth } = userSlice.actions;
export default userSlice.reducer;
