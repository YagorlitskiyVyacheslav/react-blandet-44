import { addApiTransaction } from "mockApi/addApiTransaction";
import { toast } from "react-toastify";
import { api } from "./api";

export const addTransactions = async (transaction) => {
  try {
    const res = await api.post(addApiTransaction, transaction);
    return res;
  } catch (error) {
    toast.error(error.message);
  }
};
