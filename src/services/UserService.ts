import { IUser } from "@types";
import { instance } from "api/api.config";
import { AxiosResponse } from "axios";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return instance.get<IUser[]>("/api/v1/account/info");
  }
}
