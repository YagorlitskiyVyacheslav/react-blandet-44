import { loginApi } from "mockApi/loginApi";
import { toast } from "react-toastify";
import { api } from "./api";

export const login = async (data) => {
  try {
    const res = await api.post(loginApi, data);
    return res;
  } catch (error) {
    toast.error(error.message);
  }
};
