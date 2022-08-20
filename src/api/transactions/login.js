import { loginApi } from "mockApi/loginApi";
import { api } from "./api";

export const login = (data) => api.post(loginApi, data);
