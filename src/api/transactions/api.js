import { TOKEN } from "constants/auth";

export const api = {
  get: (func, headers = {}, params) =>
    func({
      headers: { ...headers, Authorization: localStorage.getItem(TOKEN) },
      params,
    }),
  post: (func, body, headers = {}) =>
    func({
      headers: { ...headers, Authorization: localStorage.getItem(TOKEN) },
      body,
    }),
};
