import { AxiosResponse } from "axios";
import { IAuthResponse } from "@types";
import { instance } from "api/api.config";

export default class AuthService {
  static async login(
    login: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return instance.post<IAuthResponse>("/api/v1/account/login", {
      login,
      password,
    });
  }

	static async getAccountInfo() {
		return instance.get<IAuthResponse>("/api/v1/account/info")
	}

  static async logout(): Promise<void> {
    return instance.post("/logout");
  }
}
