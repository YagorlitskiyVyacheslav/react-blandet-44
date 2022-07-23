import axios from "axios";
import { api } from "constants";

export const rapidApi = axios.create({
  baseURL: api.RAPID_API_BASE_URL,
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": api.RAPID_API_KEY,
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
});
