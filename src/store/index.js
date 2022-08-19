import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactions/transactions";

const store = configureStore({
  reducer: { transactions: transactionsReducer },
});
export default store;
