import { getDataFromStorage } from "./storageData";

export const getApiTransactions = ({ headers: { Authorization } }) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (Authorization) {
        const data = getDataFromStorage().find(
          (user) => user.token === Authorization
        );
        if (!data) {
          reject({ status: 403, message: "No access to this data" });
          return;
        }
        if (shouldResolve) {
          resolve(
            getDataFromStorage().find((user) => user.token === Authorization)
              .transactions
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
