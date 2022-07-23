import axios from "axios";
import { api } from "constants";

export const currencyApi = axios.create({
  baseURL: api.CURRENCY_API_BASE_URL,
});
