import { toast } from "react-toastify";
import { currencyApi } from "api/currency";

export const getCurrency = async () => {
  try {
    const result = await currencyApi.get("");
    return result;
  } catch (error) {
    toast.error(error);
  }
};
