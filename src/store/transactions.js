import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getTransactions } from "api/transactions/getTransactions";
import { addTransaction } from "api/transactions/addTransaction";

const init = {
  list: [],
  total: 0,
};

const transactions = createSlice({
  name: "transactions",
  initialState: init,
  reducers: {
    setTransactions(state, action) {
      state.list = action.payload;
    },
    setTotal(state, action) {
      state.total = state.total + action.payload;
    },
  },
});

// Actions
export const { setTransactions, setTotal } = transactions.actions;

// Reducer
export default transactions.reducer;

// Selectors
export const selectTransactions = (state) => state.transactions.list;
export const selectTotal = (state) => state.transactions.total;

// Async Actions

export const getTransactionsAsync = () => async (dispatch) => {
  try {
    const res = await getTransactions();
    dispatch(setTransactions(res));
  } catch (error) {
    toast.error(error.message);
  }
};

export const addTransactionAsync = (transaction) => async (dispatch) => {
  try {
    const res = await addTransaction(transaction);
    dispatch(setTransactions(res));
  } catch (error) {
    toast.error(error.message);
  }
};
