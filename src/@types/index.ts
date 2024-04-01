import { RouteProps } from "react-router-dom";

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  expire: string;
}

export interface IUser {
  login: string;
  password: string;
}

export interface IUserState {
  // user: IUser | null;
  isAuth: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export type RouteData = Pick<RouteProps, "path" | "element"> & { key: string };
