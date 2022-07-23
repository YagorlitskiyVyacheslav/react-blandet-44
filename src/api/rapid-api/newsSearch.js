import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { rapidApi } from "api/rapid-api";

export const newsSearch = async () => {
  try {
    const result = await rapidApi.get("/news/search", {
      params: {
        q: "finance",
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
    });
    return result;
  } catch (error) {
    toast.error(error);
  }
};
