import { nanoid } from "nanoid";
import { getDataFromStorage, saveDataToStorage } from "./StorageData";

export const signUp = ({ body: { email, password } }) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const newUser = {
      token: nanoid(),
      user: { email, password },
      transactions: [],
    };
    setTimeout(() => {
      if (!getDataFromStorage.some((data) => data.user.email === email)) {
        if (shouldResolve) {
          resolve(
            saveDataToStorage([...getDataFromStorage(), newUser]).find(
              (user) => user.token === newUser.token
            ).transactions
          );
        } else {
          reject({ status: 500, message: "Something went wrong" });
        }
      } else {
        reject({ status: 400, message: "User already exist" });
      }
    }, 1000);
  });
};
