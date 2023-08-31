import axios, { type AxiosResponse } from "axios";
import type {
  RegisterUserRequest,
  RegisterUserResponse,
} from "@/types/api/users";

export const registerUser = async (payload: RegisterUserRequest) => {
  try {
    const { data } = await axios.post<
      RegisterUserResponse,
      AxiosResponse<RegisterUserResponse>,
      RegisterUserRequest
    >("/api/users/register", payload);
    return data;
  } catch (err: any) {
    return Promise.reject(err);
  }
};
