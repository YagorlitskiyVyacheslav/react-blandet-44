export const saveDataToStorage = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
  return JSON.parse(localStorage.getItem("data")) ?? [];
};
export const getDataFromStorage = () =>
  JSON.parse(localStorage.getItem("data")) ?? [];
