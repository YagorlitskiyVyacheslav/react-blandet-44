import { signUpApi } from "mockApi/signUpApi";
import { api } from "./api";

export const signUp = async (data) => await api.post(signUpApi, data);
