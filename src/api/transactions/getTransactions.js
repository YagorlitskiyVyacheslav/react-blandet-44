import { getApiTransactions } from "mockApi/getApiTransactions";
import { toast } from "react-toastify";
import { api } from "./api";

export const getTransactions = async () => {
  try {
    const res = await api.get(getApiTransactions);
    return res;
  } catch (error) {
    toast.error(error.message);
  }
};
