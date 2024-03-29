import { nanoid } from "nanoid";
import { getDataFromStorage, saveDataToStorage } from "./storageData";

export const addApiTransaction = ({ body, headers: { Authorization } }) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (Authorization) {
        if (shouldResolve) {
          resolve(
            saveDataToStorage(
              getDataFromStorage().map((user) => {
                if (user.token === Authorization) {
                  return {
                    ...user,
                    transactions: [
                      { ...body, id: nanoid() },
                      ...user.transactions,
                    ],
                  };
                }
                return user;
              })
            ).find((user) => user.token === Authorization).transactions
          );
        } else {
          reject({ status: 500, message: "Something went wrong" });
        }
      } else {
        reject({ status: 401, message: "User is not authorized" });
      }
    }, 1000);
  });
};
