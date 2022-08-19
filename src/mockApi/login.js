import { getDataFromStorage } from "./StorageData";

export const login = ({ body: { email, password } }) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const currentUser = getDataFromStorage.find(
      (data) => data.user.email === email
    );
    setTimeout(() => {
      if (currentUser && currentUser.user.password === password) {
        if (shouldResolve) {
          const { user, token } = getDataFromStorage().find(
            (user) => user.user.email === email
          );
          resolve({ user, token });
        } else {
          reject({ status: 500, message: "Something went wrong" });
        }
      } else {
        reject({ status: 400, message: "Email or password isn't correct" });
      }
    }, 1000);
  });
};
