import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactions";
import currenciesReducer from "./currencies";

const store = configureStore({
  reducer: { transactions: transactionsReducer, currencies: currenciesReducer },
});
export default store;
