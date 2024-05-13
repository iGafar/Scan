import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser, IUserState } from "@types";
import AuthService from "services/AuthService";
import UserService from "services/UserService";

export const login = createAsyncThunk(
  "login/userLogin",
  async (loginData: IUser) => {
    try {
      const { data } = await AuthService.login(
        loginData.login,
        loginData.password
      );

      localStorage.setItem("token", data.accessToken);

      return true;
    } catch (error) {
      return false;
    }
  }
);

export const info = createAsyncThunk("info/userInfo", async () => {
  try {
    const { data } = await UserService.fetchUsers();

    return data.eventFiltersInfo;
  } catch (error) {
    throw Error();
  }
});

const initialState: IUserState = {
  isAuth: !!localStorage.getItem("token"),
  status: "idle",
  error: null,
  usedCompany: 0,
  companyLimit: 0,
  isLoaded: false,
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
    });
    builder.addCase(login.rejected, (state) => {
      state.status = "failed";
    });

    builder.addCase(info.fulfilled, (state, action) => {
      state.companyLimit = action.payload.companyLimit;
      state.usedCompany = action.payload.usedCompanyCount;
      state.isLoaded = true;
    });
  },
});

export const { deauth } = userSlice.actions;
export default userSlice.reducer;
