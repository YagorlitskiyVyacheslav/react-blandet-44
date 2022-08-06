import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from './transactions/transactions';

const store = configureStore({
    reducer: {transactionsReducer},
})
export default store;